import { address } from 'src/EmployeeE/domain/addressEntity.model';
import { employerEntity } from 'src/EmployerE/infrastructure/outter/persistence/entity/employerEntity.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'; 

@Entity('address')
export class employerAddressEntity {
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

    @OneToMany(type => employerEntity, employer =>employer.address)
    employer: employerEntity[];


}



