import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Timestamp, BaseEntity, ManyToOne, OneToMany, JoinColumn } from "typeorm";

@Entity("data_list_test")
export class TestType extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    code: string

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

}

@Entity("data_test_main")
export class Test extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    id_event: number

    @Column()
    id_time: number

    @Column()
    id_turn: number

    @Column()
    id_category: number

    @Column()
    id_test: number

    @Column()
    id_gender: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @Column()
    status: number
}