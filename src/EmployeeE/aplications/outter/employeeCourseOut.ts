import { course } from "src/EmployeeE/domain/courseEntity.model";
import { skill } from "src/EmployeeE/domain/skillEntity.model";

export interface employeeCourseOut{
    saveEmployeeCourse(course: course, skill: skill[] ): Promise<any>; 
}