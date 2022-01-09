/*import { jobOfferRepository } from '../repository/RepositoryJobOffer'
import {jobOfferModel} from '../../../../domain/jobOfferEntity.model'
import { jobOfferMapper } from '../../mapper/jobOfferMapper'
import { jobOfferOut } from '../../../../Aplications/outter/jobOfferOut'
import { EntityRepository } from 'typeorm'


 export class jobOfferAdapter implements jobOfferOut {   
    constructor(
      private readonly valueRepo: jobOfferRepository
    ){}
    
    savejobOffer(jobOffer: jobOfferModel): Promise<jobOfferModel> {
      console.log("Estoy en adapter")
     return this.valueRepo.funcionaRepository(jobOffer)
    return this.valueRepo.funcionaRepository(jobOfferMapper.entityBack(jobOffer))
     }

}*/