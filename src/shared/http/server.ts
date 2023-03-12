import 'dotenv/config'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { routes } from './routes'
import { AppError } from '@shared/errors/AppError'

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      })
    }
    console.log(error)
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    })
  },
)

app.listen(process.env.APP_PORT, () => {
  console.log(
    `Application on server on port http://localhost:${process.env.APP_PORT}`,
  )
})
