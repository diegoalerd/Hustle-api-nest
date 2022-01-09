import { valueObject } from "../../../common/valueObjects";

interface DeadlineProps{
    value:Date,
    createdAt?:Date,
  }
  
  export class deadline extends valueObject<DeadlineProps>{
    public readonly value:Date; 
    public readonly createdAt:Date;
    private constructor (props: DeadlineProps){
      super(props);
      this.value=props.value;
      props.createdAt? this.createdAt=props.createdAt:this.createdAt=new Date() ;
    }
  
    public static create(Deadline:Date,createdAt?:Date):deadline{
      const currentDate:Date = new Date()
      if ((createdAt && createdAt>Deadline)&&Deadline<currentDate){
        throw new Error(`Deadline date "${Deadline}" must be newer than current date: ${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`)
        
      }else{ 
        return new deadline({
          value:Deadline 
        }) 
      }
    }
  
  }






