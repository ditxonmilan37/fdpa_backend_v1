import { Router } from "express";
import { getDataTestActive, getDataTestAll } from "../controllers/data_test.controller";

const router = Router()

router.get('/datatest/listAll/:idEvent', getDataTestActive)
router.get('/datatest/listAlladmin/:idEvent', getDataTestAll)

export default router