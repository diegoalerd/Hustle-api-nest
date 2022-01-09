import { skill } from "./skillEntity.model";


export class course{ 
    id_course: number;
    code: string;
    title: string;
    coverImage: string;
    skills: skill[];
    status: number;

    constructor(id_course: number, code: string,title: string, coverImage: string,status: number){
        this.id_course = id_course,
        this.code = code,
        this.title = title,
        this.coverImage = coverImage
        this.status = status
    }
}

