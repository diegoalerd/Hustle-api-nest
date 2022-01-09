import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'; 

@Entity('joboffer')
export class jobOfferEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '' })    
    title: string;
    
    @Column({ type: 'timestamp' , default: () => 'CURRENT_TIMESTAMP' })
    deadline: Date;
    
    @Column({ default: '' })    
    specialRequeriments: string;

    @Column()    
    duration: number;

    @Column()    
    hourlyRate: number;

    @Column()    
    status: number;


    constructor (id:number, title: string, deadline: Date,specialRequeriments:string, duration: number, hourlyRate: number, status:number){
        this.id = id;
        this.title = title;
        this.deadline = deadline;
        this.specialRequeriments = specialRequeriments;
        this.duration = duration;
        this.hourlyRate = hourlyRate;
        this.status = status;
    }
}