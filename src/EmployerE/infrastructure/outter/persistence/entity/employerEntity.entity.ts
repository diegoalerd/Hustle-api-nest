import { employeeAddressEntity } from "src/EmployeeE/Infrastructure/outter/persistence/entity/addressEntity";
import { skillEntity } from "src/EmployeeE/Infrastructure/outter/persistence/entity/skillEntity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm'; 
import { employerAddressEntity } from "./addressEmployerEntity.entity";
import { employerContactsEntity } from "./contactsEntity.entity";


@Entity('employer')
export class employerEntity {
    @PrimaryGeneratedColumn()
    id_employer: number;

    @Column({ default: '' })    
    companyName: string;
    
    @Column({ default: '' })    
    logo: string;

    @Column({ default: '' })    
    specialRequirements: string;

    @Column()    
    status: number;

    @ManyToOne(type => employeeAddressEntity, address => address.employee)
    @JoinColumn([
        { name: "address_id", referencedColumnName: "id_address" },
    ])
    address: employerAddressEntity;
  
    @OneToMany(type => employerContactsEntity , contacts => contacts.employer)
    contacts: employerContactsEntity[];

    @ManyToMany(() => skillEntity)
    @JoinTable()
    skills: skillEntity[];

}
