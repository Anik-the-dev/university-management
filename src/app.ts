import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
// import { log } from 'winston'
import { globalErrorHandler } from './middlewares/errorHandler'
import routes from './app/routes'
const app: Application = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use('/api/v1/users/', UserRoutes)
// app.use('/api/v1/academic-semesters/', AcademicRoutes)
app.use('/api/v1/', routes)

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  // throw new Error("Test Error")
  // throw new ApiError(400, "Test Code 400");
  next('Test Error Echologyx')
})

app.get('/a', (req: Request, res: Response, next: NextFunction) => {
  // throw new Error("Test Error")
  // throw new ApiError(400, "Test Code 400");
  next('Test Error Echologyx2')
})

// global error handler
app.use(globalErrorHandler)

export default app
