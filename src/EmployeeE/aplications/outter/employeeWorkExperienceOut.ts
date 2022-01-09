
import { workExperience } from "src/EmployeeE/domain/workExperienceEntity.model";

export interface employeeWorkExperienceOut{
    saveEmployeeWorkExperience(workExperience: workExperience): Promise<any>; 
}