import { Injectable } from '@nestjs/common';
import { employeeOut } from 'src/EmployeeE/aplications/outter/employeeout';
import { InjectRepository } from '@nestjs/typeorm';
import { reviewRepository } from '../Infrastucture/outter/persistence/repository/reviewRepository';
import { commandReviewModel } from './in/commandReview';
@Injectable()
export class ReviewService {
    constructor (
        @InjectRepository(reviewRepository)
        private readonly reviewOut: reviewRepository,
    ){}
    /*
    findAllemployee(){
        return this.reviewOut.findReviewEmployee()
    }

    findAllemployer(){
        return this.reviewOut.findReviewEmployer()
    }
*/

findAllEmployeeReview(id_req: number): Promise<any[]> {
    return this.reviewOut.findReviewEmployee(id_req)
}

updateReview(id: number , review: commandReviewModel): Promise<any>{
    return
}


}
