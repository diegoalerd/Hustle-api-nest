import { employeeEntity } from 'src/EmployeeE/Infrastructure/outter/persistence/entity/employeeEntity';
import { jobOfferEntity } from 'src/JobOfferE/infrastructure/outter/persistence/Entity/jobOfferEntity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable, OneToOne } from 'typeorm'; 
import { ColumnNumericOptions } from 'typeorm/decorator/options/ColumnNumericOptions';

@Entity('application')
export class applicationFormEntity {
    @PrimaryGeneratedColumn()
    id_applicationform: number;

    @Column({ type: 'timestamp' , default: () => 'CURRENT_TIMESTAMP' })
    sentdate: Date;

    @Column()    
    status: number;

    @ManyToOne(() => employeeEntity)
    @JoinColumn([{ name: "employee_id", referencedColumnName: "id_employee",}])
    employee: employeeEntity;

    @ManyToOne(() => jobOfferEntity)
    @JoinColumn([{ name: "joboffer_id", referencedColumnName: "id" }])
    jobOffer: jobOfferEntity;



}