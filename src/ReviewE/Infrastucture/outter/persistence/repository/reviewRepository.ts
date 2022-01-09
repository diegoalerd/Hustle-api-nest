
import { employeeEntity} from 'src/EmployeeE/Infrastructure/outter/persistence/entity/employeeEntity';
import { skillEntity } from 'src/EmployeeE/Infrastructure/outter/persistence/entity/skillEntity';
import { employerEntity } from 'src/EmployerE/infrastructure/outter/persistence/entity/employerEntity.entity';
import { Repository, EntityRepository, getRepository } from 'typeorm';
import { reviewEntity } from '../entity/reviewEntity';


@EntityRepository(reviewEntity)
export class reviewRepository extends Repository<reviewEntity>/* implements employeeOut */{

    async findReviewEmployer(id: number){
        /*
                let data = await this.createQueryBuilder('review')
                    .select
                    .where("review. = :id", id: employer_id)
                */
        
               // review.employer = employer
               // await this.find(id);
            }  
        
           async findReviewEmployee(id_req: number): Promise<any[]>{
            
               const review = await getRepository(reviewEntity)
                .createQueryBuilder("review")
                .where("review.employee_id = :id", { id: id_req })
            
                console.log(review)
                return this.find()
        
           }
    }
