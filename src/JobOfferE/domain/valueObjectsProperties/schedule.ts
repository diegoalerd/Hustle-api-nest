import { valueObject } from "../../../common/valueObjects";

interface schedule{
    value: Date;
}

export class deadline extends valueObject<schedule>{
    public readonly value: Date;

    private constructor(props: schedule){
        super(props);

        this.value = props.value;
    }
}