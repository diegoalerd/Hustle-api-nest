//import { jobOfferModel } from "src/JobOfferE/domain/jobOfferEntity.model"
//import { jobOfferEntity } from 'src/JobOfferE/infrastructure/outter/persistence/Entity/jobOfferEntity.entity';

import { jobOfferEntity } from "src/JobOfferE/infrastructure/outter/persistence/Entity/jobOfferEntity";

export interface jobOfferOut{
    savejobOffer(jobOffer: jobOfferEntity): Promise<any>; 

    findJobOffer(): Promise<any>;
    findDetailJobOffer(id: number);

}
