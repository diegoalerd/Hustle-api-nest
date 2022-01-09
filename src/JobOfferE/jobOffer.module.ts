import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jobOfferService } from './Aplications/jobOfferE.service';
import { jobOfferEntity } from './infrastructure/outter/persistence/Entity/jobOfferEntity'
import { jobOfferController } from './infrastructure/jobOfferE.controller';
import { jobOfferRepository } from './infrastructure/outter/persistence/repository/RepositoryJobOffer';
@Module({
  imports:[
           TypeOrmModule.forFeature([jobOfferRepository])], 
  providers: [jobOfferService],
  controllers: [jobOfferController],
})
export class createjobofferModule {}