import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      console.log(`App is listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('Error DB Connection', err)
  }
}
bootstrap()
