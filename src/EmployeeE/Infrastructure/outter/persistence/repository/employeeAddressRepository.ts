
import { employeeAddressOut } from 'src/EmployeeE/aplications/outter/employeeAddressOut';
import { Repository, EntityRepository, getRepository } from 'typeorm';
import { employeeAddressEntity } from '../entity/addressEntity';
import { employeeEntity } from '../entity/employeeEntity';
import { EmployeeModel } from 'src/EmployeeE/domain/EmployeeEntity.model';

@EntityRepository(employeeAddressEntity)
export class employeeAddressRepository extends Repository<employeeAddressEntity> implements employeeAddressOut {

    async saveEmployeeAddress(address: employeeAddressEntity, employee: EmployeeModel){  
        address.employee = [employee]
        return await this.save(address);
        }  
}