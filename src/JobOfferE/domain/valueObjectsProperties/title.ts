import { valueObject } from "../../../common/valueObjects";

interface titleProps{
    value: string;
}

export class title extends valueObject<titleProps>{
    public readonly value: string;

    private constructor(props: titleProps){
        super(props);

        this.value = props.value;
    }
}