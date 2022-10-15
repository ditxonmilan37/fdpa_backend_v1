import { BaseEntity, ViewColumn, ViewEntity } from "typeorm";

@ViewEntity("view_data_serie_main")
export class Serie_view extends BaseEntity {

    @ViewColumn()
    id: number

    @ViewColumn()
    id_test: number

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
    wind: string

}