import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'; 
import { employeeEntity } from './employeeEntity';

@Entity('address')
export class employeeAddressEntity {
    @PrimaryGeneratedColumn()
    id_address: number;

    @Column({ default: '' })    
    street1: string;
    
    @Column({ default: '' })    
    street2: string;

    @Column({ default: '' })    
    city: string;

    @Column({ default: '' })    
    state: string;
    
    @Column({ default: '' })    
    zip: string;

    @OneToMany(type => employeeEntity, employee =>employee.address)
    employee: employeeEntity[];


}