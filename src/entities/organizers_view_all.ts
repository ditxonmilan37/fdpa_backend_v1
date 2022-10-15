import { BaseEntity, ViewColumn, ViewEntity } from "typeorm";

@ViewEntity("view_data_list_organizers")
export class Organizers_view extends BaseEntity {

    @ViewColumn()
    id: number

    @ViewColumn()
    code: number

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