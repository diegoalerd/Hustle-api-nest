import { address } from "src/EmployeeE/domain/addressEntity.model";
import { skill } from "src/EmployeeE/domain/skillEntity.model";
import { contacts } from "./contactsEntity.model";


export class EmployerModel{

id_employer: number
companyName: string;
address: address; 
contacts: contacts[];
logo: string;
skills: skill[];
specialRequirements: string;
status: number; 


  constructor(
    id_employer: number, 
    companyName: string, 
    logo: string, 
    specialRequirements: string, 
    status: number
) {
    this.id_employer = id_employer
    this.companyName = companyName
    this.logo = logo
    this.specialRequirements = specialRequirements
    this.status = status
  }


}