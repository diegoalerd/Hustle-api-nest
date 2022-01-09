import { EmployeeModel } from "src/EmployeeE/domain/EmployeeEntity.model";
import { EmployerModel } from "src/EmployerE/domain/employerEntity.model";


export class reviewModel {

    id_review: number;
    questions: string[];
    scores: number[];
    totalScore: number;
    employee: EmployeeModel;
    employer: EmployerModel;


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