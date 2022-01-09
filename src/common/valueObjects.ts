
interface valueObjectsProps{
 [index: string]: any;
}

export abstract class valueObject<T extends valueObjectsProps>{
        constructor(protected props: T){
            const baseProps: any ={
                ...props,
            };
            this.props = baseProps;
        }

        //Esto sirve para poder comparar dos value objects de este estilo
        public equals(vo?: valueObject<T>): boolean{
            if(vo === null || vo === undefined){
                return false;
            }
            if (vo.props === undefined){
                return false;
            }
            return JSON.stringify(this.props) === JSON.stringify(vo.props)
        }
        
}