import { Router } from "express";
import { getTurnAll } from "../controllers/turn.controller";

const router = Router()

router.get('/turn/listAll', getTurnAll)

export default router