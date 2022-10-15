import { BaseEntity, ViewColumn, ViewEntity } from "typeorm";

@ViewEntity("view_data_list_test_all")
export class Test_view extends BaseEntity {

    @ViewColumn()
    id: number

    @ViewColumn()
    code: string

    @ViewColumn()
    name: string

    @ViewColumn()
    description: string

    @ViewColumn()
    created_at: Date

    @ViewColumn()
    updated_at: Date

    @ViewColumn()
    status: number

    @ViewColumn()
    id_type_test: number
}

@ViewEntity("view_data_test_time")
export class TestTime_view extends BaseEntity {

    @ViewColumn()
    id_time: number

    @ViewColumn()
    id_turn: number

    @ViewColumn()
    id_event: number

    @ViewColumn()
    id_time_t: number

    @ViewColumn()
    name_time: string

    @ViewColumn()
    name_turn: string


}