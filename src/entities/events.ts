import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Timestamp, BaseEntity } from "typeorm";

@Entity("data_events")
export class Events extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    code: number

    @Column()
    name: string

    @Column()
    date_time_begin: Date

    @Column()
    date_time_end: Date

    @Column()
    location: string

    @Column()
    id_pais: number

    @Column()
    id_organizer: number

    @Column()
    id_inspector: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @Column()
    status: number
}