interface valueObjectsProps{
    index: bigint; 
   }
   
   export abstract class valueObject<T extends valueObjectsProps>{
           constructor(protected props: T){
               const baseProps: any ={
                   ...props,
               };
               this.props = baseProps;
           }
 
}


