import { valueObject } from "../../../common/valueObjects";

interface categoryProps{
    value: number;
}

export class category extends valueObject<categoryProps>{
    public readonly value: number;

    private constructor(props: categoryProps){
        super(props);

        this.value = props.value;
    }
}