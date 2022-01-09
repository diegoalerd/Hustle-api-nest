import { EmployeeModel } from "./EmployeeEntity.model";

export class address{
    id_address: number;
    street1: string;
    street2: string;
    city: string;
    state: string;
    zip: string;
    employee: Array<EmployeeModel>

    constructor(id_address: number, street1: string, street2: string, city:string, state: string, zip:string){
        this.id_address = id_address,
        this.street1 = street1,
        this.street2 = street2,
        this.city = city,
        this.state = state,
        this.zip = zip
    }
    
}
 