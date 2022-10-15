import { BaseEntity, ViewColumn, ViewEntity } from "typeorm";

@ViewEntity("view_data_loc_pais")
export class Pais_view extends BaseEntity {

    @ViewColumn()
    id: number

    @ViewColumn()
    code: number

    @ViewColumn()
    code_iso: string

    @ViewColumn()
    name: string

    @ViewColumn()
    name_iso: string

    @ViewColumn()
    description: string

    @ViewColumn()
    flag: string

    @ViewColumn()
    created_at: Date

    @ViewColumn()
    updated_at: Date

    @ViewColumn()
    status: number
}