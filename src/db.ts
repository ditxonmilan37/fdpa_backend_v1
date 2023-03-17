import { DataSource } from "typeorm";

import { Events } from "./entities/events";
import { Events_view } from "./entities/events_view_all";
import { Pais_view } from "./entities/pais_view_all";
import { Organizers_view } from "./entities/organizers_view_all";
import { Inspectors_view } from "./entities/inspectors_view_all";
import { Test_view } from "./entities/test_view_all";
import { Test } from "./entities/test";
import { Categories_view } from "./entities/categories_view_all";
import { Gender_view } from "./entities/gender_view_all";
import { DataTest_view } from "./entities/data_test_view_all";
import { Serie } from "./entities/serie";
import { Serie_view } from "./entities/serie_view_all";
import { Results, ResultsM2 } from "./entities/results";
import { Results_view } from "./entities/results_view_all";
import { Results_view_campo, Results_view_m2_size, Results_view_m2 } from "./entities/results_view_all";
import { Time_view } from "./entities/time_view_all";
import { Turn_view } from "./entities/turn_view_all";
import { TestTime_view } from "./entities/test_view_all";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "164.92.99.84",
    port: 10005,
    username: "administrator",
    password: "@Developer2023FDPA",
    database: "fdpa_data_master_dev",
    entities: [
        Events,
        Events_view,
        Pais_view,
        Organizers_view,
        Inspectors_view,
        Test_view,
        Test,
        Categories_view,
        Gender_view,
        DataTest_view,
        Serie,
        Serie_view,
        Results,
        Results_view,
        Results_view_campo,
        Time_view,
        Turn_view,
        TestTime_view,
        Results_view_m2_size,
        ResultsM2,
        Results_view_m2
    ],
    logging: true

})
