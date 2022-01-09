
import { EmployeeModel } from "src/EmployeeE/domain/EmployeeEntity.model";
import { references} from "src/EmployeeE/domain/referenceEntity.model";
import { workExperience } from "src/EmployeeE/domain/workExperienceEntity.model";
import { skill } from "src/EmployeeE/domain/skillEntity.model";
import { course } from "src/EmployeeE/domain/courseEntity.model";
export interface employeeOut{
    saveEmployee(employee: EmployeeModel, references: references[], workExperience: workExperience[], 
        skill: skill[],course: course[]): Promise<any>; 
}