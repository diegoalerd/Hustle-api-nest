   
import { applicationFormEntity } from 'src/ApplicationFormE/infrastructure/outter/persistence/entity/applicationFormEntity';
import { employeeEntity } from 'src/EmployeeE/Infrastructure/outter/persistence/entity/employeeEntity';
import { employerEntity } from 'src/EmployerE/infrastructure/outter/persistence/entity/employerEntity.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable, OneToOne } from 'typeorm'; 

    @Entity('review')
    export class reviewEntity {
        @PrimaryGeneratedColumn()
        id_review: number;
    
        @Column("simple-array")
        questions: string[];
        
        @Column()
        scores: number[];
    
        @Column()
        totalscore: number;

        @OneToOne(() => employeeEntity)
        @JoinColumn()
        employee: employeeEntity;

        @OneToOne(() => applicationFormEntity)
        @JoinColumn([{ name: "applicationform_id", referencedColumnName: "id_applicationform" }])
        applicationform: applicationFormEntity;

        @OneToOne(() => employeeEntity)
        @JoinColumn()
        employer: employerEntity;

    }