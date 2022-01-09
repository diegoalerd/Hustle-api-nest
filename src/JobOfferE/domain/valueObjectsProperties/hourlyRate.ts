import { valueObject } from "../../../common/valueObjects";

interface HourlyRateProps{
    value: number,
  }
  
  
   export class hourlyRate extends valueObject<HourlyRateProps> {
    public readonly value: number;
  
    private constructor(props:HourlyRateProps){
      super(props);
      this.value=props.value;
    }
  
    public static create(HourlyRate:number ):hourlyRate {
      if(HourlyRate<=0){
        throw new Error('Hourly rate payment must be grater than zero') 
      }
      return  new hourlyRate({
        value: HourlyRate
      })
    }
  
    public calculatePayment(totalHours:number ):number{
      if (totalHours<=0){
        return 0;
      }
      return this.value*totalHours;
    }
  
   }