import { commandSkill } from "src/EmployeeE/aplications/in/commandSkills";
import { commandEmployerAddress } from "./commandAddressEmployer";
import { commandContacts } from "./commandContacts";

export class commandEmployerModel{

    id_employer: number
    companyName: string;
    address: commandEmployerAddress; 
    contacts: commandContacts[];
    logo: string;
    skills: commandSkill[];
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