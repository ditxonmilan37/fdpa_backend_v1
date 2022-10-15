import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Timestamp, BaseEntity } from "typeorm";

@Entity("data_serie_main")
export class Serie extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    code: number

    @Column()
    name: string

    @Column()
    description: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @Column()
    status: number

    @Column()
    id_test: number

    @Column()
    wind: string
}