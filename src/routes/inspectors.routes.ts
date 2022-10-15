import { Router } from "express";
import { getInspectorsAll } from "../controllers/inspectors.controller";

const router = Router()

router.get('/inspectors/listAll', getInspectorsAll)

export default router