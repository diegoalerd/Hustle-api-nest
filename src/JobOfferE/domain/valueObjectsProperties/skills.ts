import { valueObject } from "../../../common/valueObjects";

enum skillCategory {
    Soft = 1,
    Technical = 2,
    Unknown = -1
  }
  interface skillProps{
    name:string,
    category:skillCategory,
    number: number
  }
  
  export type skillMappedProps = {
    [P in keyof skillProps ]:skillProps[P] extends number? number: string 
  }
  
  export class skill extends valueObject<skillProps>{
    public readonly name:string
    public readonly category:skillCategory
    public readonly number: number
    private constructor(props:skillProps){
      super(props);
      this.category=props.category;
      this.name=props.name;
      this.number = props.number;
    }
  
    public static create(nameProp: string, categoryProp:string, skillNumber:number ):skill{
        if (nameProp.trim()===''){
          throw new Error("Skill name can't be blank")
        }
        let cat:skillCategory;
        switch (categoryProp.toLowerCase().trim()){
          case 'soft':
            cat=skillCategory.Soft
            break;
          case 'technical':
            cat =skillCategory.Technical
            break;
          default:
            throw new Error(`Skill category [${categoryProp}] must be either "soft" or "technical"`)
            
        }
        return new skill({category:cat, name:nameProp.toLowerCase().trim(),number:skillNumber });
    }
   public static createList(skills:skillMappedProps[]):skill[]{
      const skillList: skill[] = [];
      if(skills.length===0){
        throw new Error('You must enter at least one skill')
      }
      skills.forEach( prop =>{
        const Skill = this.create(prop.name,skillCategory[prop.category].toString(),prop.number)
        skillList.push(Skill);
      })
      return skillList;
   } 
   public static getNumber(skillName:string ):number{
     if (skillName==='Soft')
      return skillCategory.Soft
     return skillCategory.Technical
    }
  }