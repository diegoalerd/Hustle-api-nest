import { Entity } from 'typeorm'
//import {jobOfferEntity} from '../persistence/Entity/jobOfferEntity.entity'
import {jobOfferModel} from '../../../domain/jobOfferEntity.model'

export class jobOfferMapper {
     

        static entityBack(jobOfferModel: jobOfferModel): any{
         return{           
        id:jobOfferModel.id,
        title:jobOfferModel.title,
        deadline:jobOfferModel.deadline
        }
   } 
        
        /*
        static entityBack(jobOffer: jobOfferModel): any {
        throw new Error('Method not implemented.')
     }
         */
}
