import { skill } from "src/EmployeeE/domain/skillEntity.model";


export interface employeeSkillOut{
    saveEmployeeskill(skill: skill): Promise<any>; 
}