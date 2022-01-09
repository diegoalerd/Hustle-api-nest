  
import { Repository, EntityRepository } from 'typeorm';
import { jobOfferOut } from 'src/JobOfferE/Aplications/outter/jobOfferOut';
import { jobOfferEntity } from '../Entity/jobOfferEntity';
import { jobOfferModel } from 'src/JobOfferE/domain/jobOfferEntity.model';

//import { jobOfferEntity } from 'src/JobOfferE/infrastructure/outter/persistence/Entity/jobOfferEntity.entity';
//import { commandJobOffer } from 'src/JobOfferE/Aplications/In/command/commandJobOffer';
//import { jobOfferEntity } from '../Entity/jobOfferEntity.entity';
@EntityRepository(jobOfferEntity)
export class jobOfferRepository extends Repository<jobOfferEntity> implements jobOfferOut{

    savejobOffer(jobOffer: jobOfferEntity){
    return this.save(jobOffer);
    }  

    findJobOffer(){
      return this.find();
    }
     
    findDetailJobOffer(id: number){
   
      return  this.findOne(id);
    }
}