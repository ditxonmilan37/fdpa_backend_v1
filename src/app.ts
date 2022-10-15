import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import eventsRoutes from './routes/events.routes'
import paisRoutes from './routes/pais.routes'
import organizersRoutes from './routes/organizers.routes'
import inspectorsRoutes from './routes/inspectors.routes'
import testRoutes from './routes/test.routes'
import categoriesRoutes from './routes/categories.routes'
import genderRoutes from './routes/gender.routes'
import dataTestRoutes from './routes/dataTest.routes'
import serieRoutes from './routes/serie.routes'
import resultsRoutes from './routes/results.routes'
import timeRoutes from './routes/time.routes'
import turnRoutes from './routes/turn.routes'

const app = express()

app.use(morgan('dev'));
app.use(cors());
app.use(express.json())

app.use(eventsRoutes)
app.use(paisRoutes)
app.use(organizersRoutes)
app.use(inspectorsRoutes)
app.use(testRoutes)
app.use(categoriesRoutes)
app.use(genderRoutes)
app.use(dataTestRoutes)
app.use(serieRoutes)
app.use(resultsRoutes)
app.use(timeRoutes)
app.use(turnRoutes)

export default app;