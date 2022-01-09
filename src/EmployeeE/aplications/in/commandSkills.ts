
export class commandSkill{ 
    id_skill: number;
    name: string;
    category: number;
    
    constructor(id_skill :number, name: string, category: number){
        this.id_skill = id_skill,
        this.name = name,
        this.category = category
    }
}