import { EmployeeModel } from "./EmployeeEntity.model";

export class workExperience {
    id_workExperience: number;
    jobTitle: string;
    companyName: string;
    category: string;
    employee: EmployeeModel 

    constructor(id_workExperience: number, jobTitle: string, companyName: string, category: string){
        this.id_workExperience = id_workExperience,
        this.jobTitle = jobTitle,
        this.companyName = companyName,
        this.category = category
    }
}