import express from 'express'
import 'express-async-errors'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  return response.status(200).json({
    message: 'Tudo certo por aqui',
  })
})

app.listen(3000, () => {
  console.log('Subiu porra')
})
