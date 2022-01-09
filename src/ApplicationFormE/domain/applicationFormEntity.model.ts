import { EmployeeModel } from "src/EmployeeE/domain/EmployeeEntity.model";
import { jobOfferModel } from "src/JobOfferE/domain/jobOfferEntity.model";



export class applicationFormModel {

    id_applicationform: number;
    sentdate: Date ;
    employee: EmployeeModel;
    jobOffer: jobOfferModel;
    status: number;


  constructor(
    id_applicationform: number, 
    sentdate: Date , 
    status: number
) {
    this.id_applicationform = id_applicationform
    this.sentdate = sentdate
    this.status = status
  }


}