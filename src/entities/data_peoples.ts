import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity("view_data_peoples_stivou")
export class view_data_peoples_stivou extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    id_athlete: number

    @Column()
    id_test: number
    
    @Column()
    names: string

    @Column()
    last_name: string

    @Column()
    age: string

    @Column()
    mother_last_name: string

    @Column()
    birthday: string

    @Column()
    code_pais: string

}