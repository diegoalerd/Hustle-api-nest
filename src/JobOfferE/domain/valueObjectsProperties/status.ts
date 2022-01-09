import { valueObject } from "../../../common/valueObjects";
// Case para los distintos status
export enum statuses{
    Posted=0,
    Open=1,
    Closed=2,
    Assigned=3,
    InProgress=4,
    Finished=5,
    Cancelled=6,
  }
  
  interface statusProps{
    value:statuses
  }
  
  export class status extends valueObject<statusProps>{
    public readonly value: statuses;
  
    private constructor(props: statusProps ){
      super(props);
      this.value=props.value;
    }
  
    public static create(Status?:statuses):status{
      if(!Status) Status =0;
      if (Status <0 || Status >6){
       throw new Error('status must be between 0 and 6')
      }
      return  new status({value: Math.round(Status)})
    }
    get statusName():string{
      return statuses[this.value].toString();
    }
      static getStatusNumber(status:string):number{
      let number:number;
      switch(status.toLowerCase()){
        case 'posted':
          number=statuses.Posted;
          break;
        case 'open':
          number = statuses.Open
          break;
        case 'closed':
          number = statuses.Closed
          break;
        case 'assigned':
          number=statuses.Assigned
          break
        case 'inprogress':
          number = statuses.Assigned
          break
        case 'finished':
          number = statuses.Finished
        case 'cancelled':
          number = statuses.Cancelled
        default:
          number = -1
      }
      return number;
    }
  }

  // Por los momentos es estatico se debe agregar la logica de como cambiar los status