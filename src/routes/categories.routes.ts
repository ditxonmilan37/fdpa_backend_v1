import { Router } from "express";
import { getCategoriesAll } from "../controllers/categories.controller";

const router = Router()

router.get('/categories/listAll', getCategoriesAll)

export default router