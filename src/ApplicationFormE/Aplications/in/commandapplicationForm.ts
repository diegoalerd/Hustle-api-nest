import { commandEmployeeModel } from "src/EmployeeE/aplications/in/comandemployee";
import { commandJobOffer } from "src/JobOfferE/Aplications/In/command/commandJobOffer";

export class commandApplicationFormModel {

    id_applicationform: number;
    sentdate: Date ;
    employee: commandEmployeeModel;
    jobOffer: commandJobOffer;
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