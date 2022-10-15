import { Request, Response } from 'express'
import { Categories_view } from '../entities/categories_view_all'

export const getCategoriesAll = async (req: Request, res: Response) => {
    try {

        const categories = await Categories_view.find()

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
