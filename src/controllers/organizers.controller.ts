import { Request, Response } from 'express'
import { Organizers_view } from '../entities/organizers_view_all'

export const getOrganizersAll = async (req: Request, res: Response) => {
    try {

        const organizers = await Organizers_view.find()

        return res.status(200).json({
            statusBol: true,
            data: organizers
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
