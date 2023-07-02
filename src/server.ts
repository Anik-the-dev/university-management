import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { infoLogger, errorLogger } from './shared/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    infoLogger.info('Database Connected Successfully')

    app.listen(config.port, () => {
      infoLogger.info(`App is listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('Error DB Connection', err)
  }
}
bootstrap()
