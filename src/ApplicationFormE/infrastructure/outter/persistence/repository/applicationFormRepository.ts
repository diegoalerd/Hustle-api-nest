
import { applicationFormModel } from 'src/ApplicationFormE/domain/applicationFormEntity.model';
import { employeeOut } from 'src/EmployeeE/aplications/outter/employeeout';
import { address } from 'src/EmployeeE/domain/addressEntity.model';
import { employeeEntity } from 'src/EmployeeE/Infrastructure/outter/persistence/entity/employeeEntity';
import { jobOfferEntity } from 'src/JobOfferE/infrastructure/outter/persistence/Entity/jobOfferEntity';
import { Repository, EntityRepository, getRepository } from 'typeorm';
import { applicationFormEntity } from '../entity/applicationFormEntity';
import {getConnection} from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';


@EntityRepository(applicationFormEntity)
export class applicationFormRepository extends Repository<applicationFormEntity> /*implements */ {
    
    async saveApplicationForm(applicationForm: applicationFormEntity,jobOffer: jobOfferEntity,employee: employeeEntity){
    
    applicationForm.employee = employee
    applicationForm.jobOffer = jobOffer
    await this.save(applicationForm);
    }  

    async putAcceptedApplicationForm(id: number): Promise<any> {

        const application = await getConnection()
        .createQueryBuilder()
        .update("application")
        .set({status: 1})         
        .where("application.id_applicationform = :id", {id: id})
        .execute();

        console.log(id)

        await getConnection()
        .createQueryBuilder()
        .update("application")
        .set({status: 2})
        .where("application.id_applicationform != :id", {id: id})
        .execute();
              
        return application

    }

    async findApplicationEmployee(id: number): Promise<any> {

        const application = await getRepository(applicationFormEntity)
        .createQueryBuilder("application")
        .leftJoinAndSelect("application.employee", "test_employee")
        .where("application.joboffer_id = :id", {id: id})
        .getMany();
        
        console.log(application)
         return application
        
    }
    

}