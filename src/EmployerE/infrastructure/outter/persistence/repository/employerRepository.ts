
import { skillEntity } from 'src/EmployeeE/Infrastructure/outter/persistence/entity/skillEntity';
import { Repository, EntityRepository, getRepository } from 'typeorm';
import { employerContactsEntity } from '../entity/contactsEntity.entity';
import { employerEntity } from '../entity/employerEntity.entity';

@EntityRepository(employerEntity)
export class employerRepository extends Repository<employerEntity>/* implements employeeOut */{

    async saveEmployee(employer: employerEntity, contacts: employerContactsEntity[],skills: skillEntity[]){

    employer.contacts = contacts
    employer.skills = skills
    await this.save(employer);
    }  
    
}