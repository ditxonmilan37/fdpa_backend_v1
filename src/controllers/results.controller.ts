import { Request, Response } from "express";
import { Results, ResultsM2 } from "../entities/results";
import { Serie_view } from "../entities/serie_view_all";
import {
  Results_view,
  Results_view_campo,
  Results_view_m2_size,
  Results_view_m2,
} from "../entities/results_view_all";
import { Serie } from "../entities/serie";
import { stringify } from "querystring";

export const setResult = async (req: Request, res: Response) => {
  try {
    const { id_serie, wind, status } = req.body;

    const itemsResults: Array<Results> = req.body.itemsResults;

    var result = new Results();

    const save = await Promise.all(
      itemsResults.map(async (item: any) => {
        const resultados = Results.create({
          id_serie: id_serie,
          camp1: item.camp1,
          camp2: item.camp2,
          camp3: item.camp3,
          camp4: item.camp4,
          camp5: item.camp5.trim(),
          camp6: item.camp6,
          camp7: item.camp7,
          camp8: item.camp8,
          camp9: item.camp9,
          camp10: item.camp10,
          camp11: item.camp11,
          camp12: item.camp12,
          camp13: item.camp13,
          camp14: item.camp14,
          camp15: item.camp15,
          camp16: item.camp16,
          camp17: item.camp17,
          camp18: item.camp18,
          camp19: item.camp19,
          status: status,
          created_at: new Date(),
          updated_at: new Date(),
          code: id_serie + item.camp5.trim(),
        });
        const oneLine = Serie.create({
          wind: wind,
        });
        await Serie.update({ id: parseInt(id_serie) }, oneLine);
        await Results.save(resultados);
      })
    );

    if (save) {
      return res.status(200).json({
        statusBol: true,
        data: result,
      });
    }
  } catch (error) {
    return res.status(200).json({
      statusBol: true,
    });
  }
};

export const updateCamp5 = async (req: Request, res: Response) => {
  try {
    const { id, camp5 } = req.body;

    // Update camp5
    const result = await Results.update({ id: id }, { camp5: camp5.trim() });

    if (!result.affected) {
      return res.status(404).json({
        statusBol: false,
        message: 'Result not found',
      });
    }

    return res.status(200).json({
      statusBol: true,
      message: 'Updated successfully',
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        statusBol: false,
        message: error.message,
      });
    }
  }
};


export const setResultCamp = async (req: Request, res: Response) => {
  try {
    const {
      result1,
      result2,
      result3,
      result4,
      result5,
      result6,
      viento1,
      viento2,
      viento3,
      viento4,
      viento5,
      viento6,
      bol1,
      bol2,
      bol3,
      bol4,
      bol5,
      bol6,
    } = req.body;

    const { id } = req.params;

    const resultados = Results.create({
      result1: result1,
      result2: result2,
      result3: result3,
      result4: result4,
      result5: result5,
      result6: result6,
      viento1: viento1,
      viento2: viento2,
      viento3: viento3,
      viento4: viento4,
      viento5: viento5,
      viento6: viento6,
      bol1: bol1,
      bol2: bol2,
      bol3: bol3,
      bol4: bol4,
      bol5: bol5,
      bol6: bol6,
      updated_at: new Date(),
    });

    await Results.update({ id: parseInt(id) }, resultados);

    return res.status(200).json({
      statusBol: true,
      data: resultados,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        statusBol: false,
        message: error.message,
      });
    }
  }
};

export const getResultsWithSerie = async (req: Request, res: Response) => {
  try {
    const serieView = await Serie_view.findBy({
      id_test: parseInt(req.params.idTest),
      status: 1,
    });

    let itemResults: Array<any> = [];

    const save = await Promise.all(
      serieView.map(async (item) => {
        const ResultsView = await Results_view.findBy({ id_serie: item.id });

        itemResults.push({
          id: item.id,
          code: item.code,
          wind: item.wind,
          nameSerie: item.name,
          results: ResultsView,
        });
      })
    );

    if (save) {
      itemResults.sort((a: any, b: any) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      });

      return res.status(200).json({
        statusBol: true,
        data: itemResults,
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        statusBol: false,
        message: error.message,
      });
    }
  }
};

export const getResultsWithSerieCampo = async (req: Request, res: Response) => {
  try {
    const serieView = await Serie_view.findBy({
      id_test: parseInt(req.params.idTest),
      status: 1,
    });

    let itemResults: Array<any> = [];

    const save = await Promise.all(
      serieView.map(async (item) => {
        const ResultsView = await Results_view_campo.findBy({
          id_serie: item.id,
        });

        itemResults.push({
          id: item.id,
          code: item.code,
          wind: item.wind,
          nameSerie: item.name,
          results: ResultsView,
        });
      })
    );

    if (save) {
      itemResults.sort((a: any, b: any) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      });

      return res.status(200).json({
        statusBol: true,
        data: itemResults,
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        statusBol: false,
        message: error.message,
      });
    }
  }
};

export const getResultsOneSerie = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    let ResultsView = await Results_view.findBy({ id_serie: parseInt(id) });
    ResultsView = ResultsView.sort((a, b) => a.id - b.id);

    return res.status(200).json({
      statusBol: true,
      data: ResultsView,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        statusBol: false,
        message: error.message,
      });
    }
  }
};

export const deleteResultsOneSerie = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const ResultsView = await Results_view.delete({ id_serie: parseInt(id) });

    return res.status(200).json({
      statusBol: true,
      data: ResultsView,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        statusBol: false,
        message: error.message,
      });
    }
  }
};

export const getSizeResults = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const ResultsView = await Results_view_m2_size.findBy({
      id_serie: parseInt(id),
    });

    return res.status(200).json({
      statusBol: true,
      data: ResultsView,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        statusBol: false,
        message: error.message,
      });
    }
  }
};

export const getResultsM2 = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const ResultsView = await Results_view.findBy({ id_serie: parseInt(id) });

    let itemResults: Array<any> = [];

    const save = await Promise.all(
      ResultsView.map(async (item, index) => {
        const ResultsViewM2 = await Results_view_m2.findBy({
          id_result: item.id,
        });

        let result = JSON.parse(JSON.stringify(ResultsViewM2));

        let itemResultsM2: Array<any> = [];

        ResultsViewM2.sort((a: any, b: any) => {
          if (a.size < b.size) {
            return -1;
          }
          if (a.size > b.size) {
            return 1;
          }
          return 0;
        });

        ResultsViewM2.map((child, index) => {
          itemResultsM2.push({
            size: child.size,
            id: child.id,
            res: [
              {
                r1: child.r1,
                r2: child.r2,
                r3: child.r3,
              },
            ],
          });
        });

        itemResults.push({
          id: item.id,
          name: item.camp5,
          results: itemResultsM2,
        });
      })
    );

    if (save) {
      itemResults.sort((a, b) => a.id - b.id);

      return res.status(200).json({
        statusBol: true,
        data: itemResults,
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        statusBol: false,
        message: error.message,
      });
    }
  }
};

export const setSize = async (req: Request, res: Response) => {
  try {
    const { id_serie, size } = req.body;

    const itemsResults: Array<ResultsM2> = req.body.itemsResults;

    var result = new ResultsM2();

    const save = await Promise.all(
      itemsResults.map(async (item: any) => {
        const resultados = ResultsM2.create({
          id_serie: id_serie,
          size: size,
          id_result: item.id,
          validate: item.id_serie + size + item.id,
          created_at: new Date(),
          updated_at: new Date(),
        });

        await ResultsM2.save(resultados);
      })
    );

    if (save) {
      
      return res.status(200).json({
        statusBol: true,
        data: result,
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        statusBol: false,
        message: error.message,
      });
    }
  }
};

export const setResultM2 = async (req: Request, res: Response) => {
  try {
    const { r1, r2, r3 } = req.body;

    const { id } = req.params;

    const resultados = ResultsM2.create({
      r1: r1,
      r2: r2,
      r3: r3,
      updated_at: new Date(),
    });

    await ResultsM2.update({ id: parseInt(id) }, resultados);

    return res.status(200).json({
      statusBol: true,
      data: resultados,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        statusBol: false,
        message: error.message,
      });
    }
  }
};

export const getResultsWithSerieCampoM2 = async (
  req: Request,
  res: Response
) => {
  try {
    const serieView = await Serie_view.findBy({
      id_test: parseInt(req.params.idTest),
      status: 1,
    });

    let itemResults: Array<any> = [];

    const save = await Promise.all(
      serieView.map(async (item) => {
        const ResultsView = await Results_view_campo.findBy({
          id_serie: item.id,
        });

        let dataNew: Array<any> = [];

        await Promise.all(ResultsView.map(async (item) => {
          let itemResultsM2: Array<any> = [];
          let lastSizeWithOne: any = "";
          const ResultsViewM2 = await Results_view_m2.findBy({
            id_result: item.id,
          });

          ResultsViewM2.sort((a: any, b: any) => {
            if (a.size < b.size) {
              return -1;
            }
            if (a.size > b.size) {
              return 1;
            }
            return 0;
          });

          await Promise.all(ResultsViewM2.map(async (child, index) => {
            if (child.r1 != null || child.r2 != null || child.r3 != null) {
              itemResultsM2.push({
                size: child.size,
                id: child.id,
                res: [
                  {
                    r1: child.r1,
                    r2: child.r2,
                    r3: child.r3,
                  },
                ],
              });

              if ((child.r1 && Number(child.r1) === 1) || (child.r2 && Number(child.r2) === 1) || (child.r3 && Number(child.r3) === 1)) {
                let size = Number(child.size).toFixed(2);
                lastSizeWithOne = size.includes('.') ? size : size + '.00';
              }
            }
          }));

          dataNew.push({
            id: item.id,
            name: item.camp5,
            team: item.camp6,
            results: itemResultsM2,
            lastSizeWithOne: lastSizeWithOne,
          });
        }));

        // Sort dataNew array in descending order based on lastSizeWithOne
        dataNew.sort((a, b) => b.lastSizeWithOne - a.lastSizeWithOne);

        itemResults.push({
          id_serie: item.id,
          id_test: item.id_test,
          code_serie: item.code,
          name_serie: item.name,
          description_serie: item.description,
          participants: dataNew,
        });
      })
    );

    if (save) {
      setTimeout(() => {
        return res.status(200).json({
          statusBol: true,
          data: itemResults,
        });
      }, 0);
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        statusBol: false,
        message: error.message,
      });
    }
  }
};