import { Request, Response } from 'express'
import { Time_view } from '../entities/time_view_all'

export const getTimeAll = async (req: Request, res: Response) => {
    try {

        const time = await Time_view.find()

        return res.status(200).json({
            statusBol: true,
            data: time
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
