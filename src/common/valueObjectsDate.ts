//Este value object es para fecha

interface valueObjectsProps{
    index: Date ;
   }
   
   export abstract class valueObject<T extends valueObjectsProps>{
           constructor(protected props: T){
               const baseProps: any ={
                   ...props,
               };
               this.props = baseProps;
           }
 
}