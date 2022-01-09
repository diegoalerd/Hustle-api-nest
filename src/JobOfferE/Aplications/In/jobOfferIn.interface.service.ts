import {commandJobOffer} from './command/commandJobOffer'
export interface jobOfferInterface{
    createPost(jobOffer: commandJobOffer): Promise<any> ; 
}