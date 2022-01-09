import { valueObject } from "../../../common/valueObjects";

interface nameProps{
    value: string;
}

export class name extends valueObject<nameProps>{
    public readonly value: string;

    private constructor(props: nameProps){
        super(props);

        this.value = props.value;
    }
}