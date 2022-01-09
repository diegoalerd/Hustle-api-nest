import { commandSkill } from "./commandSkills";


export class course{ 
    id_course: number;
    code: string;
    title: string;
    coverImage: string;
    courseSkills: commandSkill[];
    status: number;

    constructor(id_course: number, code: string,title: string, coverImage: string,status: number){
        this.id_course = id_course,
        this.code = code,
        this.title = title,
        this.coverImage = coverImage
        this.status = status
    }
}