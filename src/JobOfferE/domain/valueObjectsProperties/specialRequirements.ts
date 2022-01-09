import { valueObject } from "../../../common/valueObjects";

interface specialRequirementsProps{
    value: string;
}

export class specialRequirements extends valueObject<specialRequirementsProps>{
    public readonly value: string;

    private constructor(props: specialRequirementsProps){
        super(props);

        this.value = props.value;
    }
}