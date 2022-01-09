
import { Repository, EntityRepository, getRepository } from 'typeorm';
import { courseEntity } from '../entity/courseEntity';
import { employeeCourseOut } from 'src/EmployeeE/aplications/outter/employeeCourseOut';
import { skillEntity } from '../entity/skillEntity';

@EntityRepository(courseEntity)
export class employeeCourseRepository extends Repository<courseEntity> implements employeeCourseOut {

    async saveEmployeeCourse(course: courseEntity, skills: skillEntity[]){  

        course.skills = skills
        return await this.save(course);
        }  
}