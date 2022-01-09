import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('skill')
export class skillEntity {
    @PrimaryGeneratedColumn()
    id_skill: number;

    @Column({ default: '' })    
    name: string;

    @Column()    
    category: number;
}