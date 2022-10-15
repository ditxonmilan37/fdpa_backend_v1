import { BaseEntity, ViewColumn, ViewEntity } from "typeorm";

@ViewEntity("view_data_list_time")
export class Time_view extends BaseEntity {

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
}