import { Router } from "express";
import { setSerie, getSerieAll, getSerieTest, putSerie, getSerieActive } from "../controllers/serie.controller";

const router = Router()

router.post('/serie/save', setSerie)
router.get('/serie/listAll', getSerieActive)
router.get('/serieadmin/listAll', getSerieAll)
router.get('/serie/list/:idTest', getSerieTest)
router.put('/serie/update/:id', putSerie)

export default router