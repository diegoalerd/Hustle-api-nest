import { employeeOut } from 'src/EmployeeE/aplications/outter/employeeout';
import { Repository, EntityRepository, getRepository } from 'typeorm';
import { employeeEntity } from '../entity/employeeEntity';
import { address } from 'src/EmployeeE/domain/addressEntity.model';
import { employeeAddressEntity } from '../entity/addressEntity';
import { workExperience } from 'src/EmployeeE/domain/workExperienceEntity.model';
import { employeeWorkExperienceEntity } from '../entity/workExperienceEntity';
import { employeeReferencesEntity } from '../entity/referencesEntity';
import { skillEntity } from '../entity/skillEntity';
import { courseEntity } from '../entity/courseEntity';

@EntityRepository(employeeEntity)
export class employeeRepository extends Repository<employeeEntity> implements employeeOut {

    async saveEmployee(employee: employeeEntity, references: employeeReferencesEntity[], workExperience: employeeWorkExperienceEntity[],
         skills: skillEntity[], course: courseEntity[]){

    employee.course = course
    employee.references = references
    employee.workExperience = workExperience
    employee.skills = skills
    await this.save(employee);
    }  
    
}