import { Router } from "express";
import { getTimeAll } from "../controllers/time.controller";

const router = Router()

router.get('/time/listAll', getTimeAll)

export default router