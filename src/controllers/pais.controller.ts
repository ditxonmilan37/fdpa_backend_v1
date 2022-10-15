import { Request, Response } from 'express'
import { Pais_view } from '../entities/pais_view_all'

export const getPaisAll = async (req: Request, res: Response) => {
    try {

        const pais = await Pais_view.find()

        return res.status(200).json({
            statusBol: true,
            data: pais
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
