import { Injectable } from '@nestjs/common';
import{ Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { jobOfferModel } from'../domain/jobOfferEntity.model'; 
import { commandJobOffer } from './In/command/commandJobOffer';         
/*import { from, Observable } from 'rxjs';*/
import {jobOfferInterface} from './In/jobOfferIn.interface.service'
import {jobOfferRepository} from '../infrastructure/outter/persistence/repository/RepositoryJobOffer';
import { jobOfferOut } from './outter/jobOfferOut';

@Injectable()
export class jobOfferService implements jobOfferInterface {
    constructor(
        @InjectRepository(jobOfferRepository)
       private readonly jobOfferadapter: jobOfferOut
       /*private readonly jobOfferRepository: jobOfferOut*/
    ){}

   createPost(command: commandJobOffer): Promise<any> {
      const jobOfferDI = new jobOfferModel(
        command.id,
        command.title,
        command.deadline,
        command.specialRequeriments,
        command.hourlyRate,
        command.duration,
        command.status
      )

      console.log("Estoy en service")
       return this.jobOfferadapter.savejobOffer(jobOfferDI);
      }


      findAllPost(): Promise<any[]> {
        return this.jobOfferadapter.findJobOffer()
      } 

      findDetailjobOffer(id: number){
        return this.jobOfferadapter.findDetailJobOffer(id)
      }




   /*  createPost(command: commandJobOffer): Observable <commandJobOffer> {

      let jobOfferDI = new jobOfferModel(
        command.id,
        command.title,
        command.deadline
      )
      return from(this.jobOfferRepository.save(jobOfferDI))
    }*/
  

   /*
   async createPost(command: commandJobOffer):   Promise<Observable<commandJobOffer>> {
     
      
      let jobOfferDI = new jobOfferModel(
        command.id,
        command.title,
        command.deadline
      )
      return from(this.jobOfferRepository.save(jobOfferDI))
    }
    */
/*
    findAllPost(): Observable<jobOffer[]> {
        return from(this.jobOfferRepository.find())
    } 

    updatePost(id: number, jobOffer: jobOffer): Observable<UpdateResult>{
      return from(this.jobOfferRepository.update(id,jobOffer));
    }

    deletePost(id: number): Observable<DeleteResult>{
      return from(this.jobOfferRepository.delete(id));
    }*/
} 


