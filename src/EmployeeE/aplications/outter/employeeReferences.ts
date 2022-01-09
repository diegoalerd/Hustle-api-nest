import { references} from "src/EmployeeE/domain/referenceEntity.model";

export interface employeeReferencesOut{
    saveReferences(references: references): Promise<any>; 
}