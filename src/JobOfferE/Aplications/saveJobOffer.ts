/*import { jobOfferOut } from "./outter/jobOfferOut";
import { jobOfferEntity } from "../infrastructure/outter/persistence/Entity/jobOfferEntity.entity";
import { Repository, EntityRepository } from 'typeorm';
import { jobOfferMapper } from "../infrastructure/outter/mapper/jobOfferMapper";

@EntityRepository(jobOfferEntity)
export class savejobOfferRepository extends Repository<jobOfferEntity> {
    savejobOffer(jobOffer: jobOfferEntity){
        return this.save(jobOfferMapper.entityBack(jobOffer));
    }
}*/