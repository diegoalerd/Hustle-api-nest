import { Repository, EntityRepository, getRepository } from 'typeorm';
import { employerContactsEntity } from '../entity/contactsEntity.entity';

@EntityRepository(employerContactsEntity)
export class employerContactsRepository extends Repository<employerContactsEntity> /*implements employeeReferencesOut*/{

    async findContacts(contacts: employerContactsEntity){
       await this.find(contacts);
    }
}