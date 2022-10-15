import { Request, Response } from 'express'
import { DataTest_view } from '../entities/data_test_view_all'

export const getDataTestAll = async (req: Request, res: Response) => {
    try {

        const categories = await DataTest_view.findBy({ id_event: parseInt(req.params.idEvent) })

        return res.status(200).json({
            statusBol: true,
            data: categories
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

export const getDataTestActive = async (req: Request, res: Response) => {
    try {

        const categories = await DataTest_view.findBy({ id_event: parseInt(req.params.idEvent), status: 1 })

        return res.status(200).json({
            statusBol: true,
            data: categories
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
