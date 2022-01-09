import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { commandReviewModel } from '../Aplications/in/commandReview';
import { ReviewService } from '../Aplications/review.service';

@Controller('review')
export class ReviewController {
    constructor(private reviewService: ReviewService){}

  /* @Get(':id')
    findAllemployer( @Param('id') id: number): Promise<any[]>{
        return this.reviewService.findAllEmployerReview(id) 
    } */

   /* @Get(':id')
    findAllemployee( @Param('id') id: number): Promise<any[]>{
        return this.reviewService.findAllEmployeeReview(id) 
    } */
/*
    @Get()
    findAllemployee(): Promise<any[]>{
       // return this.reviewService.findAllEmployeeReview() 
    } */

    @Get(':id')
    findAllemployee(@Param('id') id: number): Promise<any[]>{
        return this.reviewService.findAllEmployeeReview(id) 
    } 

    @Put(':id')
    update(
        @Param('id') id:number,
        @Body() review: commandReviewModel,
    ): Promise<any>{
        return this.reviewService.updateReview(id, review); 
    }

}
