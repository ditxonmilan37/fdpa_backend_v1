import { Request, Response } from 'express'
import { TestTime_view, Test_view } from '../entities/test_view_all'
import { Time_view } from '../entities/time_view_all'
import { Test } from '../entities/test'
import { DataTest_view } from '../entities/data_test_view_all'

export const getTestActive = async (req: Request, res: Response) => {
    try {
        const {type_test} = req.params
        const test = await Test_view.findBy({ status: 1, id_type_test: parseInt(type_test) })

        return res.status(200).json({
            statusBol: true,
            data: test
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

export const getTestAll = async (req: Request, res: Response) => {
    try {

        const test = await Test_view.find()

        return res.status(200).json({
            statusBol: true,
            data: test
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


export const setTest = async (req: Request, res: Response) => {

    try {

        const {
            idEvent,
            idCategory,
            idGender,
            idTime,
            idTurn,
        } = req.body;

        const listTest: Array<Test> = req.body.listTest

        var test = new Test();

        const lista = await Promise.all(listTest.map(async (list) => {
            const lista = Test.create(
                {
                    id_event: idEvent,
                    id_category: idCategory,
                    id_gender: idGender,
                    id_time: idTime,
                    id_turn: idTurn,
                    id_test: list.id,
                    status: list.status,
                    created_at: new Date(),
                    updated_at: new Date(),
                }
            );
            await Test.save(lista)
        }));

        if (lista) {
            return res.status(200).json({
                statusBol: true,
                data: test
            })
        }


    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                statusBol: false,
                message: error.message
            })
        }
    }


}

export const putTest = async (req: Request, res: Response) => {

    try {

        const { id } = req.params

        const {
            idEvent,
            idCategory,
            idGender,
            idTest,
            idTime,
            idTurn,
            status
        } = req.body;

        const lista = Test.create(
            {
                id_event: idEvent,
                id_category: idCategory,
                id_gender: idGender,
                id_test: idTest,
                id_time: idTime,
                id_turn: idTurn,
                status: status,
                created_at: new Date(),
                updated_at: new Date(),
            }
        );

        const test = await Test.update({ id: parseInt(id) }, lista)

        return res.status(200).json({
            statusBol: true,
            data: test
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

export const getTestWithTime = async (req: Request, res: Response) => {
    try {

        const testView = await TestTime_view.findBy({ id_event: parseInt(req.params.idEvent) })

        let itemResults: Array<any> = []

        const save = await Promise.all(
            testView.map(async (item) => {
                const testView = await DataTest_view.findBy({ id_time: item.id_time, id_event: item.id_event })

                itemResults.push({
                    id_time: item.id_time,
                    id_turn: item.id_turn,
                    name_time: item.name_time,
                    name_turn: item.name_turn,
                    results: testView
                })
            })



        )


        if (save) {
            itemResults.sort((a: any, b: any) => {
                if (a.id_time < b.id_time) {
                    return -1;
                }
                if (a.id_time > b.id_time) {
                    return 1;
                }
                return 0;
            });

            return res.status(200).json({
                statusBol: true,
                data: itemResults
            })
        }

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                statusBol: false,
                message: error.message
            })
        }
    }
}