import { Request, Response } from 'express'

import { Events } from "../entities/events"
import { Events_view } from '../entities/events_view_all'

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