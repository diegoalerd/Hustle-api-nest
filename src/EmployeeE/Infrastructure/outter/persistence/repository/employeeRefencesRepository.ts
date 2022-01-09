import { Repository, EntityRepository, getRepository } from 'typeorm';
import { employeeReferencesOut } from 'src/EmployeeE/aplications/outter/employeeReferences';
import { employeeReferencesEntity } from '../entity/referencesEntity';
import { references } from 'src/EmployeeE/domain/referenceEntity.model';

@EntityRepository(employeeReferencesEntity)
export class employeeReferencesRepository extends Repository<employeeReferencesEntity> implements employeeReferencesOut{

    async saveReferences(references: references){
       await this.save(references);
    }
}