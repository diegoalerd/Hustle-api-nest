import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { address } from '../domain/addressEntity.model';
import { EmployeeModel } from '../domain/EmployeeEntity.model';
import { employeeRepository } from '../Infrastructure/outter/persistence/repository/employeeRepository';
import { commandEmployeeModel } from './in/comandEmployee';
import { employeeOut } from './outter/employeeout';
import { employeeAddressOut } from './outter/employeeAddressOut';
import { employeeAddressRepository } from '../Infrastructure/outter/persistence/repository/employeeAddressRepository';
import { references } from '../domain/referenceEntity.model';
import { employeeReferencesRepository } from '../Infrastructure/outter/persistence/repository/employeeRefencesRepository';
import { employeeReferencesOut } from './outter/employeeReferences';
import { workExperience } from '../domain/workExperienceEntity.model';
import { employeeWorkExperienceRepository } from '../Infrastructure/outter/persistence/repository/employeeWorkExperienceRepository';
import { employeeWorkExperienceOut } from './outter/employeeWorkExperienceOut';
import { skill } from '../domain/skillEntity.model'; 
import { employeeSkillOut } from './outter/employeeskillOut';
import { employeeSkillRepository } from '../Infrastructure/outter/persistence/repository/employeeSkillRepository';
import { employeeCourseRepository } from '../Infrastructure/outter/persistence/repository/employeeCourseRepository';
import { employeeCourseOut } from './outter/employeeCourseOut';
import { course } from '../domain/courseEntity.model';

@Injectable()
export class EmployeeService{
    
    constructor(
        @InjectRepository(employeeRepository)
        private readonly employeeout: employeeOut,
        @InjectRepository(employeeAddressRepository)
        private readonly employeeAddressOut: employeeAddressOut,
        @InjectRepository(employeeReferencesRepository)
        private readonly employeeReferencesOut: employeeReferencesOut,
        @InjectRepository(employeeWorkExperienceRepository)
        private readonly employeeWorkExperienceOut: employeeWorkExperienceOut,
        @InjectRepository(employeeSkillRepository)
        private readonly employeeSkillOut: employeeSkillOut,
        @InjectRepository(employeeCourseRepository)
        private readonly employeeCourseOut: employeeCourseOut 
    ){}
 

   async createEmployee(employee: commandEmployeeModel): Promise<any>{
        const employeeAddress = new address(     
            employee.address.id_address,
            employee.address.street1,
            employee.address.street2,
            employee.address.city,
            employee.address.state,
            employee.address.zip,
        )

        const employeeDI = new EmployeeModel(
            employee.id_employee,
            employee.firstName,
            employee.middleName,
            employee.lastName,
            employee.phoneNumber,
            employee.dateOfBirth,
            employee.ssn,
            employee.educationLevel,
            employee.rating,
            employee.status,
        )   
        console.log(course[0])
        
        let referenceList = []
        let workExperienceList = []
        let skillList = []
        let courseList = []
        let courseSkillList = []
        
        for (let x=0;x<=employee.references.length-1;x++){
                const employeeReferences = new references(
                employee.references[x].id_references,
                employee.references[x].fullName,
                employee.references[x].jobTitle,
                employee.references[x].companyName,
                employee.references[x].phoneNumber,
                employee.references[x].email)

                referenceList[x] = employeeReferences
                
                await this.employeeReferencesOut.saveReferences(employeeReferences)
           
        }

        for (let x=0;x<=employee.workExperience.length-1;x++){
            const employeeWorkExperience = new workExperience(
            employee.workExperience[x].id_workExperience,
            employee.workExperience[x].jobTitle,
            employee.workExperience[x].companyName,
            employee.workExperience[x].category)

            workExperienceList[x] = employeeWorkExperience 
            
            await this.employeeWorkExperienceOut.saveEmployeeWorkExperience(employeeWorkExperience)
       
        }

        for (let x=0;x<=employee.skills.length-1;x++){
            const employeeskill = new skill(
            employee.skills[x].id_skill,
            employee.skills[x].name,
            employee.skills[x].category)

            skillList[x] = employeeskill
            
            await this.employeeSkillOut.saveEmployeeskill(employeeskill)
       
        }
            
        for (let x=0;x<=employee.course.length-1;x++){
            const employeeCourse = new course(
            employee.course[x].id_course,
            employee.course[x].code,
            employee.course[x].title,
            employee.course[x].coverImage,
            employee.course[x].status
            )
            
            courseList[x] = employeeCourse
            
                //mio
                for (let y=0;y<=employee.course[x].courseSkills.length-1;y++){

                    const employeeCourseSkill = new skill(
                        employee.course[x].courseSkills[y].id_skill,
                        employee.course[x].courseSkills[y].name,
                        employee.course[x].courseSkills[y].category)
            
                        courseSkillList[y] = employeeCourseSkill
                        
                        await this.employeeSkillOut.saveEmployeeskill(employeeCourseSkill)
                    
                }
                
                await this.employeeCourseOut.saveEmployeeCourse(employeeCourse,courseSkillList)
    
        }

        console.log(referenceList)
        console.log(workExperienceList)
        console.log(skillList)
        console.log(courseList)
        console.log(courseSkillList)
        await this.employeeout.saveEmployee(employeeDI, referenceList, workExperienceList, skillList,courseList)
        await this.employeeAddressOut.saveEmployeeAddress(employeeAddress,employeeDI)
      
        return 
        
    }
}
