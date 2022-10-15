import { Router } from "express";
import { getGenderAll } from "../controllers/gender.controller";

const router = Router()

router.get('/gender/listAll', getGenderAll)

export default router