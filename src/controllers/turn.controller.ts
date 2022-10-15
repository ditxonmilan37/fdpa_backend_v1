import { Request, Response } from 'express'
import { Turn_view } from '../entities/turn_view_all'

export const getTurnAll = async (req: Request, res: Response) => {
    try {

        const turn = await Turn_view.find()

        return res.status(200).json({
            statusBol: true,
            data: turn
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
