import { Module } from '@nestjs/common';
import { ReviewController } from './Infrastucture/review.controller';
import { ReviewService } from './Aplications/review.service';
import { reviewRepository } from './Infrastucture/outter/persistence/repository/reviewRepository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([reviewRepository])], 
  controllers: [ReviewController],
  providers: [ReviewService]
})
export class ReviewModule {}
