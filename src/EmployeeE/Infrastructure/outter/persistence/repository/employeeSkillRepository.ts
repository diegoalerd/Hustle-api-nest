import { employeeSkillOut } from "src/EmployeeE/aplications/outter/employeeskillOut";
import { skill } from "src/EmployeeE/domain/skillEntity.model";
import { EntityRepository, Repository } from "typeorm";
import { skillEntity } from "../entity/skillEntity";

@EntityRepository(skillEntity)
export class employeeSkillRepository extends Repository<skillEntity> implements employeeSkillOut{

    async saveEmployeeskill(skill: skill){
       await this.save(skill);
    }
}