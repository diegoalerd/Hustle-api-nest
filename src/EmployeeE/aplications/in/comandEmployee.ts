import { address } from "./comandAddress";
import { references } from "./comandReferences";
import { course } from "./commandCourse";
import { commandSkill } from "./commandSkills";
import { workExperience } from "./commandWorkExperience";

export class commandEmployeeModel{
    id_employee: number;
    firstName: string;
    middleName: string;
    lastName: string;
    phoneNumber: string;
    dateOfBirth: Date ;
    address: address;
    ssn: string;
    educationLevel: number;
    workExperience: workExperience[];
    skills: commandSkill[];
    course: course[];
    references: references[];
    rating: number;
    status: number;

    constructor(id_employee: number, firstName: string,middleName: string,lastName: string,phoneNumber: string,
         dateOfBirth:Date, ssn: string, educationLevel: number, rating: number,status: number){
        this.id_employee= id_employee;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.dateOfBirth = dateOfBirth;
        this.ssn = ssn;
        this.educationLevel = educationLevel;
        this.rating = rating;
        this.status =  status;
    }
 }