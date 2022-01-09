export class references{ 
    id_references: number;
    fullName: string;
    jobTitle: string;
    companyName: string;
    phoneNumber: string;
    email: string;
    
    constructor(id_references: number, fullName: string,jobTitle: string, companyName: string,phoneNumber: string,email: string){
        this.id_references = id_references,
        this.fullName = fullName,
        this.jobTitle = jobTitle,
        this.companyName = companyName
        this.phoneNumber = phoneNumber
        this.email = email
    }
}