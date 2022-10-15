import { BaseEntity, ViewColumn, ViewEntity } from "typeorm";


@ViewEntity("view_data_test_main")
export class DataTest_view extends BaseEntity {

    @ViewColumn()
    id: number

    @ViewColumn()
    id_event: number

    @ViewColumn()
    id_time: number

    @ViewColumn()
    id_turn: number

    @ViewColumn()
    id_test: number

    @ViewColumn()
    id_category: number

    @ViewColumn()
    id_gender: number

    @ViewColumn()
    id_type_test: number

    @ViewColumn()
    type_test_category: number

    @ViewColumn()
    name_test: string

    @ViewColumn()
    name_category: string

    @ViewColumn()
    name_time: string

    @ViewColumn()
    name_turn: string

    @ViewColumn()
    description_test: string

    @ViewColumn()
    name_gender: string

    @ViewColumn()
    created_at: Date

    @ViewColumn()
    updated_at: Date

    @ViewColumn()
    status: number
}