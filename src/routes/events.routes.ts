import { Router } from "express";
import { getEventsAll, setEvent, getEventsSort, putEvent } from "../controllers/events.controller";

const router = Router()

router.get('/events/listAll', getEventsAll)
router.post('/events/save', setEvent)
router.get('/events/listSort/:status', getEventsSort)
router.put('/events/update/:id', putEvent)

export default router