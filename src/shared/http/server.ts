import 'dotenv/config'
import 'reflect-metadata'
import { app } from './app'
import { AppDataSource } from '../typeorm'

AppDataSource.initialize()
  .then(() => {
    app.listen(process.env.APP_PORT, () => {
      console.log(
        `Application on server on port http://localhost:${process.env.APP_PORT}`,
      )
    })
  })
  .catch(() => {
    console.log('Banco de dados não conectado!')
  })
