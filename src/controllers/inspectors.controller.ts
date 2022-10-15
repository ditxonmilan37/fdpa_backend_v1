import { Request, Response } from 'express'
import { Inspectors_view } from '../entities/inspectors_view_all'

export const getInspectorsAll = async (req: Request, res: Response) => {
    try {

        const inspectors = await Inspectors_view.find()

        return res.status(200).json({
            statusBol: true,
            data: inspectors
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
