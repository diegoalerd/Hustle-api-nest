import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'; 
import { employeeEntity } from './employeeEntity';

@Entity('workexperience')
export class employeeWorkExperienceEntity {
    @PrimaryGeneratedColumn()
    id_workExperience: number;

    @Column({ default: '' })    
    jobTitle: string;   

    @Column({ default: '' })    
    companyName: string; 

    @Column({ default: '' })    
    category: string;

    @ManyToOne(type => employeeEntity , employee => employee.workExperience)
    @JoinColumn([{ name: "employee_id"}])
    employee: employeeEntity;
}