import { Router } from "express";
import { getPaisAll } from "../controllers/pais.controller";

const router = Router()

router.get('/pais/listAll', getPaisAll)

export default router