// Express Setup
import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/modules/users/user.route'
const app: Application = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users/', router)

app.get('/', (req: Request, res: Response) => {
  res.send('Working Fine.........')
})

export default app
