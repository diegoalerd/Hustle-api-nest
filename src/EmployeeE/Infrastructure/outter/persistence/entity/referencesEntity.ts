import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { employeeEntity } from './employeeEntity';

@Entity('references')
export class employeeReferencesEntity {
    @PrimaryGeneratedColumn()
    id_references: number;

    @Column({ default: '' })    
    fullName: string;   

    @Column({ default: '' })    
    jobTitle: string;

    @Column({ default: '' })    
    companyName: string;

    @Column({ default: '' })    
    phoneNumber: string;

    @Column({ default: '' })    
    email: string;

   @ManyToOne(type => employeeEntity , employee => employee.references)
    @JoinColumn([{ name: "employee_id", referencedColumnName: "id_employee" }])
    employee: employeeEntity;
        
}