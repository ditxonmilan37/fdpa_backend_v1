import { BaseEntity, ViewColumn, ViewEntity } from "typeorm";

export class pais {

}

@ViewEntity("view_data_events_all")
export class Events_view extends BaseEntity {

    @ViewColumn()
    id: number

    @ViewColumn()
    code: number

    @ViewColumn()
    name: string

    @ViewColumn()
    date_time_begin: Date

    @ViewColumn()
    date_time_begin_string: string

    @ViewColumn()
    date_time_end: Date

    @ViewColumn()
    date_time_end_string: string

    @ViewColumn()
    location: string

    @ViewColumn()
    id_pais: number

    @ViewColumn()
    code_pais: number

    @ViewColumn()
    code_iso: string

    @ViewColumn()
    name_iso: string

    @ViewColumn()
    name_pais: string

    @ViewColumn()
    flag: string

    @ViewColumn()
    id_organizer: number

    @ViewColumn()
    code_organizer: number

    @ViewColumn()
    name_organizer: string

    @ViewColumn()
    id_inspector: number

    @ViewColumn()
    code_inspector: number

    @ViewColumn()
    name_inspector: string

    @ViewColumn()
    created_at: Date

    @ViewColumn()
    updated_at: Date

    @ViewColumn()
    status: number
}