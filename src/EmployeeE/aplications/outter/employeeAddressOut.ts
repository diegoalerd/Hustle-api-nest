import { EmployeeModel } from "src/EmployeeE/domain/EmployeeEntity.model";
import { employeeAddressEntity } from "src/EmployeeE/Infrastructure/outter/persistence/entity/addressEntity";

export interface employeeAddressOut{
    saveEmployeeAddress(address: employeeAddressEntity, employee: EmployeeModel ): Promise<any>; 
}