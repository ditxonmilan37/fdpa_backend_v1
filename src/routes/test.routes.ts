import { Router } from "express";
import { getTestAll, setTest, putTest, getTestActive, getTestWithTime } from "../controllers/test.controller";

const router = Router()

router.get('/test/listAll/:type_test', getTestActive)
router.get('/testadmin/listAll', getTestAll)
router.post('/test/save', setTest)
router.put('/test/update/:id', putTest)
router.get('/test/listWithTime/:idEvent', getTestWithTime)

export default router