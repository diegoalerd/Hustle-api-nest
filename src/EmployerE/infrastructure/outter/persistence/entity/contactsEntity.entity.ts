import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'; 
import { employerEntity } from './employerEntity.entity';

@Entity('contacts')
export class employerContactsEntity {
    @PrimaryGeneratedColumn()
    id_contact: number; 

    @Column({ default: '' })    
    fullName: string;   

    @Column({ default: '' })    
    jobTitle: string; 

    @Column({ default: '' })    
    phoneNumber: string;

    @Column({ default: '' })    
    email: string;

    @ManyToOne(type => employerEntity , employer => employer.contacts)
    @JoinColumn([{ name: "employer_id"}])
    employer: employerEntity;
}
