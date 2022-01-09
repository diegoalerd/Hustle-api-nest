//import { employeeEntity } from "src/EmployeeE/Infrastructure/outter/persistence/entity/employeeEntity";
//import { employerEntity } from "src/EmployerE/infrastructure/outter/persistence/entity/employerEntity";
import { reviewEntity } from "src/ReviewE/Infrastucture/outter/persistence/entity/reviewEntity";


export interface reviewOut{
   // findReviewEmployee(id: number): Promise<any[]>;
    
    findReviewEmployee(): Promise<any[]>;

    findReviewEmployer(id: number): Promise<any[]>;
}