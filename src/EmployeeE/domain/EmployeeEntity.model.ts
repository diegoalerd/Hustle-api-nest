import { applicationFormModel } from "src/ApplicationFormE/domain/applicationFormEntity.model";
import { employeeAddressEntity } from "../Infrastructure/outter/persistence/entity/addressEntity";
import { address } from "./addressEntity.model";
import { course } from "./courseEntity.model";
import { references } from "./referenceEntity.model";
import { skill } from "./skillEntity.model";
import { workExperience } from "./workExperienceEntity.model";

export class EmployeeModel{
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
    skills: skill[];
    course: course[];
    references: references[]
    rating: number;
    status: number;
    applicationform: applicationFormModel[];

    constructor(id_employee: number, firstName: string, middleName: string,lastName: string,phoneNumber: string,
         dateOfBirth:Date, ssn: string, educationLevel: number, rating: number,status: number
         ){
        this.id_employee = id_employee;
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
