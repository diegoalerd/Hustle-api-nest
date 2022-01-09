import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm'; 
import { skillEntity } from './skillEntity';

@Entity('course')
export class courseEntity {
    @PrimaryGeneratedColumn()
    id_course: number;

    @Column({ default: '' })    
    code: string;
    
    @Column({ default: '' })    
    title: string;

    @Column({ default: '' })    
    coverImage: string;

    @Column()    
    status: number;

    @ManyToMany(() => skillEntity)
    @JoinTable()
    skills: skillEntity[];

}