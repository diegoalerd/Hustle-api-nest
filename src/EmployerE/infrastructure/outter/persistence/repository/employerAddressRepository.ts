
import { Repository, EntityRepository, getRepository } from 'typeorm';
import { EmployeeModel } from 'src/EmployeeE/domain/EmployeeEntity.model';
import { employerAddressEntity } from '../entity/addressEmployerEntity.entity';
import { employerEntity } from '../entity/employerEntity.entity';

@EntityRepository(employerAddressEntity)
export class employerAddressRepository extends Repository<employerAddressEntity> /*implements employeeAddressOut*/ {

    async saveEmployeeAddress(address: employerAddressEntity, employer: employerEntity){  
        address.employer = [employer]
        return await this.find(address);
        }  
}