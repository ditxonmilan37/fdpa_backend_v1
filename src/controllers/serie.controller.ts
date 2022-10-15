import { Request, Response } from 'express'
import { Serie } from "../entities/serie"
import { Serie_view } from "../entities/serie_view_all"

export const setSerie = async (req: Request, res: Response) => {

    try {

        const {
            code,
            name,
            description,
            id_test,
            status
        } = req.body;

        const serie = new Serie();
        serie.code = code;
        serie.name = name;
        serie.description = description;
        serie.status = status;
        serie.created_at = new Date();
        serie.updated_at = new Date();
        serie.id_test = id_test;
        await serie.save();


        return res.status(200).json({
            statusBol: true,
            data: serie
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

export const getSerieAll = async (req: Request, res: Response) => {
    try {

        const serieView = await Serie_view.find()

        return res.status(200).json({
            statusBol: true,
            data: serieView
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

export const getSerieActive = async (req: Request, res: Response) => {
    try {

        const serieView = await Serie_view.findBy({ status: 1 })

        return res.status(200).json({
            statusBol: true,
            data: serieView
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

export const getSerieTest = async (req: Request, res: Response) => {
    try {

        const serieView = await Serie_view.findBy({ id_test: parseInt(req.params.idTest) })

        return res.status(200).json({
            statusBol: true,
            data: serieView
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

export const putSerie = async (req: Request, res: Response) => {

    try {

        const { id } = req.params

        const {
            code,
            name,
            description,
            id_test,
            status
        } = req.body;

        const serie = new Serie();
        serie.code = code;
        serie.name = name;
        serie.description = description;
        serie.status = status;
        serie.created_at = new Date();
        serie.updated_at = new Date();
        serie.id_test = id_test;
        await Serie.update({ id: parseInt(id) }, serie);


        return res.status(200).json({
            statusBol: true,
            data: serie
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