import { Request, Response } from 'express'
import { Gender_view } from '../entities/gender_view_all'

export const getGenderAll = async (req: Request, res: Response) => {
    try {

        const gender = await Gender_view.find()

        return res.status(200).json({
            statusBol: true,
            data: gender
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
