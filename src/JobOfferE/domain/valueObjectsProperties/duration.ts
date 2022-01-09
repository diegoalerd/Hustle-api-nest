import { valueObject } from "../../../common/valueObjects";


interface durationProps{
  value:number,
  type?:string,

}

export class duration extends valueObject<durationProps>{
  public readonly value:number;
  public readonly type: string;
  private constructor (props: durationProps){
    super(props);
    this.value= props.value;
    props.type? this.type = props.type
    :this.type="hours" 
  }
  
  public static create(Duration:number, type?:string): duration{
    if (Duration<=0){
      throw  new Error('Job duration must be greater than zero')
    } 
      return new duration({value:Duration,type:type});
  }

  public toDays():duration{
    return new duration({value:this.value/24, type:'days' })
  }
}