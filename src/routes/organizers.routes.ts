import { Router } from "express";
import { getOrganizersAll } from "../controllers/organizers.controller";

const router = Router()

router.get('/organizers/listAll', getOrganizersAll)

export default router