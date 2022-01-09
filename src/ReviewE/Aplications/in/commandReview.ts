import { applicationFormModel } from "src/ApplicationFormE/domain/applicationFormEntity.model";
import { commandEmployeeModel } from "src/EmployeeE/aplications/in/comandemployee";
import { commandEmployerModel } from "src/EmployerE/aplications/in/commandEmployer";



export class commandReviewModel {

    id_review: number;
    questions: string[];
    scores: number[];
    totalScore: number;
    employee: commandEmployeeModel;
    applicationform: applicationFormModel;
    employer: commandEmployerModel;


  constructor(
    id_review: number, 
    questions: string[], 
    scores: number[], 
    totalScore: number, 
) {
    this.id_review = id_review
    this.questions = questions
    this.scores = scores
    this.totalScore = totalScore
  }


}
