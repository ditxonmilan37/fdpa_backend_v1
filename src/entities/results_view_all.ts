import { BaseEntity, ViewColumn, ViewEntity } from "typeorm";

@ViewEntity("view_data_results_app")
export class Results_view extends BaseEntity {
  @ViewColumn()
  id: number;

  @ViewColumn()
  id_serie: number;

  @ViewColumn()
  camp1: string;

  @ViewColumn()
  camp2: string;

  @ViewColumn()
  names: string;

  @ViewColumn()
  birthday: string;

  @ViewColumn()
  camp3: string;

  @ViewColumn()
  camp4: string;

  @ViewColumn()
  last_name: string;

  @ViewColumn()
  camp5: string;

  @ViewColumn()
  camp6: string;

  @ViewColumn()
  camp7: string;

  @ViewColumn()
  camp8: string;

  @ViewColumn()
  camp9: string;

  @ViewColumn()
  camp10: string;

  @ViewColumn()
  camp11: string;

  @ViewColumn()
  camp12: string;

  @ViewColumn()
  camp13: string;

  @ViewColumn()
  camp14: string;

  @ViewColumn()
  camp15: string;

  @ViewColumn()
  camp16: string;

  @ViewColumn()
  camp17: string;

  @ViewColumn()
  camp18: string;

  @ViewColumn()
  camp19: string;

  @ViewColumn()
  created_at: Date;

  @ViewColumn()
  updated_at: Date;

  @ViewColumn()
  status: number;

  @ViewColumn()
  result1: string;

  @ViewColumn()
  result2: string;

  @ViewColumn()
  result3: string;

  @ViewColumn()
  result4: string;

  @ViewColumn()
  result5: string;

  @ViewColumn()
  result6: string;

  @ViewColumn()
  bol1: string;

  @ViewColumn()
  bol2: string;

  @ViewColumn()
  bol3: string;

  @ViewColumn()
  bol4: string;

  @ViewColumn()
  bol5: string;

  @ViewColumn()
  bol6: string;

  @ViewColumn()
  viento1: string;

  @ViewColumn()
  viento2: string;

  @ViewColumn()
  viento3: string;

  @ViewColumn()
  viento4: string;

  @ViewColumn()
  viento5: string;

  @ViewColumn()
  viento6: string;

  @ViewColumn()
  parcial: number;
}

@ViewEntity("view_data_results_app_campo")
export class Results_view_campo extends BaseEntity {
  @ViewColumn()
  id: number;

  @ViewColumn()
  id_serie: number;

  @ViewColumn()
  camp1: string;

  @ViewColumn()
  camp2: string;

  @ViewColumn()
  camp3: string;

  @ViewColumn()
  camp4: string;

  @ViewColumn()
  camp5: string;

  @ViewColumn()
  camp6: string;

  @ViewColumn()
  camp7: string;

  @ViewColumn()
  camp8: string;

  @ViewColumn()
  camp9: string;

  @ViewColumn()
  camp10: string;

  @ViewColumn()
  camp11: string;

  @ViewColumn()
  camp12: string;

  @ViewColumn()
  camp13: string;

  @ViewColumn()
  camp14: string;

  @ViewColumn()
  camp15: string;

  @ViewColumn()
  camp16: string;

  @ViewColumn()
  camp17: string;

  @ViewColumn()
  camp18: string;

  @ViewColumn()
  camp19: string;

  @ViewColumn()
  created_at: Date;

  @ViewColumn()
  updated_at: Date;

  @ViewColumn()
  status: number;

  @ViewColumn()
  result1: string;

  @ViewColumn()
  result2: string;

  @ViewColumn()
  result3: string;

  @ViewColumn()
  result4: string;

  @ViewColumn()
  result5: string;

  @ViewColumn()
  result6: string;

  @ViewColumn()
  viento1: string;

  @ViewColumn()
  viento2: string;

  @ViewColumn()
  viento3: string;

  @ViewColumn()
  viento4: string;

  @ViewColumn()
  viento5: string;

  @ViewColumn()
  viento6: string;

  @ViewColumn()
  parcial: number;
}

@ViewEntity("view_data_r2_size")
export class Results_view_m2_size extends BaseEntity {
  @ViewColumn()
  size: string;

  @ViewColumn()
  id_serie: number;
}

@ViewEntity("view_data_results_m2")
export class Results_view_m2 extends BaseEntity {
  @ViewColumn()
  id: number;

  @ViewColumn()
  id_result: number;

  @ViewColumn()
  size: string;

  @ViewColumn()
  id_serie: number;

  @ViewColumn()
  r1: string;

  @ViewColumn()
  r2: string;

  @ViewColumn()
  r3: string;
}
