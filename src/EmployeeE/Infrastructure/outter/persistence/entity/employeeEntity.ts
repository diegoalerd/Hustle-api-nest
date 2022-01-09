
import { applicationFormEntity } from 'src/ApplicationFormE/infrastructure/outter/persistence/entity/applicationFormEntity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm'; 
import {employeeAddressEntity} from './addressEntity'
import { courseEntity } from './courseEntity';
import { employeeReferencesEntity } from './referencesEntity';
import { skillEntity } from './skillEntity';
import { employeeWorkExperienceEntity } from './workExperienceEntity';

@Entity('test_employee') // Cambiar nombre de la entidad 
export class employeeEntity {
    @PrimaryGeneratedColumn()
    id_employee: number;

    @Column({ default: '' })    
    firstName: string;
    
    @Column({ default: '' })    
    middleName: string;

    @Column({ default: '' })    
    lastName: string;

    @Column({ default: '' })    
    phoneNumber: string;
    
    @Column({ type: 'timestamp' , default: () => 'CURRENT_TIMESTAMP' })
    dateOfBirth: Date;
    
    @Column()    
    educationLevel: number;

    @Column()    
    rating: number;

    @Column()    
    status: number;

    @ManyToOne(type => employeeAddressEntity, address => address.employee)
    @JoinColumn([
        { name: "address_id", referencedColumnName: "id_address" },
    ])
    address: employeeAddressEntity;
  
    @OneToMany(type => employeeReferencesEntity , references => references.employee)
    references: employeeReferencesEntity[];
  
    @OneToMany(type => employeeWorkExperienceEntity , workExperience => workExperience.employee)
    workExperience: employeeWorkExperienceEntity[];

    @OneToMany(type => applicationFormEntity , applicationform => applicationform.employee)
    applicationform: applicationFormEntity[];

    @ManyToMany(() => skillEntity)
    @JoinTable()
    skills: skillEntity[];

    @ManyToMany(() => courseEntity)
    @JoinTable()
    course: courseEntity[];

}
