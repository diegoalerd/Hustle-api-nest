import { employeeWorkExperienceEntity } from "../entity/workExperienceEntity";
import { employeeAddressOut } from 'src/EmployeeE/aplications/outter/employeeAddressOut';
import { Repository, EntityRepository, getRepository } from 'typeorm';
import { employeeAddressEntity } from '../entity/addressEntity';
import { employeeEntity } from '../entity/employeeEntity';
import { EmployeeModel } from 'src/EmployeeE/domain/EmployeeEntity.model';
import { employeeWorkExperienceOut } from 'src/EmployeeE/aplications/outter/employeeWorkExperienceOut';

@EntityRepository(employeeWorkExperienceEntity)
export class employeeWorkExperienceRepository 
extends Repository<employeeWorkExperienceEntity> 
implements employeeWorkExperienceOut{

   async saveEmployeeWorkExperience(workExperience: employeeWorkExperienceEntity){
        await this.save(workExperience)
    }

}