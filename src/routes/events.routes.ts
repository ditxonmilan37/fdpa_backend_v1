import { Router } from "express";
import { getEventsAll, setEvent, getEventsSort, putEvent, getEvent } from "../controllers/events.controller";

const router = Router()

router.get('/events/listAll', getEventsAll)
router.get('/events/:eventId', getEvent)
router.post('/events/save', setEvent)
router.get('/events/listSort/:status', getEventsSort)
router.put('/events/update/:id', putEvent)

export default router