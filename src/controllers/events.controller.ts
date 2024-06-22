import { Request, Response } from 'express'

import { Events } from "../entities/events"
import { Events_view } from '../entities/events_view_all'
import { Test, TestType } from '../entities/test'
import { Turn_view } from '../entities/turn_view_all'
import { Gender_view } from '../entities/gender_view_all'
import { Categories_view } from '../entities/categories_view_all'
import { Time_view } from '../entities/time_view_all'
import { Test_view } from '../entities/test_view_all'
import { Serie_view } from '../entities/serie_view_all'
import { Results_view } from '../entities/results_view_all'
import { Results } from '../entities/results'

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const getEventsAll = async (req: Request, res: Response) => {
    try {

        const events = await Events_view.find()

        return res.status(200).json({
            statusBol: true,
            data: events
        })

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                statusBol: false,
                message: error.message
            })
        }
    }
}


import pdf from 'html-pdf';

function eventToHtml(eventData: any) {
    // Aquí puedes definir cómo quieres que se vea el HTML.
    // Este es solo un ejemplo simple.
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body style="font-family: sans-serif">
    <div class="hoja">
      <div style="margin-bottom: 20px">
        <div style="width: 100%; height: 30px; background-color: #c43f42"></div>

        <div style="float: left">
          <img
            style="width: 70px; margin-top: 5px"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
      </div>
      <div style="margin-top: 10px; margin-bottom: 30px">
        <h3
          style="
            font-size: 11px;
            font-weight: bold;
            color: #392d2d;
            margin: 0;
            padding: 0;
          "
        >
          ${eventData.name} - ${eventData.date_time_begin_string} Hasta ${eventData.date_time_end_string}
        </h3>
        <ul style="list-style: none; margin-top: 4px; color: #303030">
          <li style="font-size: 11px; font-weight: 600">
            Federación Deportiva Peruana de Atletismo
          </li>
          <li style="font-size: 11px; font-weight: 600; margin-top: 5px">
            RESLTADOS OFICIALES
          </li>
        </ul>
      </div>

      ${eventData.tests.map((test: any) => `
        <div style="display: block; margin-top: 5px; padding: 0px 20px">
        <div>
          <h4 style="padding: 0; margin: 0; font-size: 7px">
            ${test.nameTest} ${test.gender} ${test.category}
          </h4>
          <h4 style="padding: 0; margin: 0; font-size: 7px">
            
          </h4>
        </div>

        ${test.series.map((serie: any) => `
        <h4 style="padding: 0; margin: 0; font-size: 7px; margin-top: 20px">
            ${serie.name} ${serie.wind}
          </h4>
        <table
        width="100%"
        style="
          margin-top: 10px;
          border-collapse: collapse;
          border: 1px solid grey;
        "
      >
        <tr
          style="background-color: #16203e; color: #ffd792; font-weight: bold"
        >
          <td style="padding: 2px; font-size: 9px" width="10%;">Posición.</td>
          <td style="padding: 2px; font-size: 9px" width="10%"># Comp.</td>
          <td style="padding: 2px; font-size: 9px" width="30%">Nombre</td>
          <td style="padding: 2px; font-size: 9px" width="10%">Equipo</td>
          <td style="padding: 2px; font-size: 9px" width="10%">Marca</td>
        </tr>

        ${serie.resultsView.map((result: any) => `
        <tr style="border-bottom: solid 1px grey">
        <td style="padding: 2px; font-size: 7px">${ result.camp1 }</td>
        <td style="padding: 2px; font-size: 7px">
          ${ result.camp3 }
        </td>
        <td style="padding: 2px; font-size: 7px">
          ${result.camp5.toUpperCase() }
        </td>
        <td style="padding: 2px; font-size: 7px">
          ${ result.camp6}
        </td>
        <td style="padding: 2px; font-size: 7px">
          ${ result.camp7 }
        </td>
      </tr>
        `).join('')}
      </table>
        `).join('')}


      </div>
      `).join('')}
    </div>
  </body>
</html>

    `;
}

export const getEvent = async (req: Request, res: Response) => {
    try {
        const eventId = req.params.eventId;
        const event = await Events_view.findOneBy({id: parseInt(eventId)})

        if (!event) {
            return res.status(404).json({
                statusBol: false,
                message: 'Event not found'
            })
        }

        const tests = await Test.findBy({id_event: parseInt(eventId)})
        const testsData = await Promise.all(tests.map(async (test) => {
            const turn = await Turn_view.findOneBy({id: test.id_turn}) // Asume que cada test tiene una propiedad 'id_turn'
            const gender = await Gender_view.findOneBy({id: test.id_gender}) // Asume que cada test tiene una propiedad 'id_gender'
            const category = await Categories_view.findOneBy({id: test.id_category}) // Asume que cada test tiene una propiedad 'id_category'
            const time = await Time_view.findOneBy({id: test.id_time}) // Asume que cada test tiene una propiedad 'id_time'
            const name = await Test_view.findOneBy({id: test.id_test}) // Asume que cada test tiene una propiedad 'id_time'
            const series = await Serie_view.findBy({id_test: test.id}) // Asume que cada test tiene una propiedad 'id'

            const seriesData = await Promise.all(series.map(async (serie) => {
                const resultsView = await Results_view.findBy({id_serie: serie.id})

                return {
                    ...serie,
                    resultsView: resultsView,
                };
            }))

            return {
                ...test,
                turn: turn ? turn.name : null,
                gender: gender ? gender.name : null,
                category: category ? category.name : null,
                time: time ? time.name : null,
                nameTest: name ? name.description : null,
                series: seriesData // Añade las series con los resultados a los datos del test
            };
        }))

        const eventData = {
            ...event,
            tests: testsData
        };

        const html = eventToHtml(eventData);
        pdf.create(html).toStream((err, stream) => {
            if (err) {
                return res.status(500).json({
                    statusBol: false,
                    message: err.message
                });
            }

            res.setHeader('Content-Type', 'application/pdf');
            stream.pipe(res);
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                statusBol: false,
                message: error.message
            })
        }
    }
};

export const setEvent = async (req: Request, res: Response) => {

    try {

        const {
            code,
            name,
            date_time_begin,
            date_time_end,
            location,
            id_pais,
            id_organizer,
            id_inspector,
            status
        } = req.body;

        const event = new Events();
        event.code = code;
        event.name = name;
        event.date_time_begin = date_time_begin;
        event.date_time_end = date_time_end;
        event.location = location;
        event.id_pais = id_pais;
        event.id_organizer = id_organizer;
        event.id_inspector = id_inspector;
        event.status = status;
        event.created_at = new Date();
        event.updated_at = new Date();

        const result = await Events.insert(event);

        return res.status(200).json({
            statusBol: true,
            insertId: result.generatedMaps[0].id,

            data: event
        })

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                statusBol: false,
                message: error.message
            })
        }
    }


}

export const getEventsSort = async (req: Request, res: Response) => {
    try {

        const dateNow = new Date()

        const events = await Events_view.findBy({
            status: parseInt(req.params.status)
        })



        return res.status(200).json({
            statusBol: true,

            data: events
        })

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                statusBol: false,
                message: error.message
            })
        }
    }
}

export const putEvent = async (req: Request, res: Response) => {

    try {

        const {
            code,
            name,
            date_time_begin,
            date_time_end,
            location,
            id_pais,
            id_organizer,
            id_inspector,
            status
        } = req.body;

        const { id } = req.params;

        const event = new Events();
        event.code = code;
        event.name = name;
        event.date_time_begin = date_time_begin;
        event.date_time_end = date_time_end;
        event.location = location;
        event.id_pais = id_pais;
        event.id_organizer = id_organizer;
        event.id_inspector = id_inspector;
        event.status = status;
        event.created_at = new Date();
        event.updated_at = new Date();

        await Events.update({ id: parseInt(id) }, event);

        return res.status(200).json({
            statusBol: true,

            data: event
        })

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                statusBol: false,
                message: error.message
            })
        }
    }


}