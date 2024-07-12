import { Router } from "express";
import { setResult, 
    getResultsWithSerie, 
    getResultsOneSerie, 
    deleteResultsOneSerie, 
    setResultCamp,
    getResultsWithSerieCampo, 
    getResultsWithSerieCampoM2, 
    getSizeResults, 
    setSize, 
    getResultsM2, 
    setResultM2, 
    updateCamp5} from "../controllers/results.controller";

const router = Router()

router.post('/results/save', setResult)
router.post('/results/update/camp5', updateCamp5)
router.post('/results/size/save', setSize)
router.get('/results/listAll/:idTest', getResultsWithSerie)
router.get('/resultsCampo/listAll/:idTest', getResultsWithSerieCampo)
router.get('/resultsCampo/listAll/m2/:idTest', getResultsWithSerieCampoM2)
router.get('/results/list/:id', getResultsOneSerie)
router.get('/results/list/m2/:id', getResultsM2)
router.get('/results/getsizeresults/:id', getSizeResults)
router.put('/results/update/:id', setResultCamp)
router.put('/results/update/m2/:id', setResultM2)
router.delete('/results/delete/:id', deleteResultsOneSerie)

export default router