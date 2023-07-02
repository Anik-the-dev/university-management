import { Request, Response, NextFunction } from 'express'
import config from '../config'
import { IGenericErrorMessage } from '../interfaces/error'
import handleValidationError from '../errors/handleValidationError'
export const globalErrorHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500
  let message = 'Something went Wrong!'
  let errorMessages: IGenericErrorMessage[] = []

  if (err?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (err instanceof Error) {
    message = err?.message
    errorMessages = err?.message
      ? [
          {
            path: '',
            message: err?.message,
          },
        ]
      : []
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env === 'development' ? err?.stack : undefined,
  })
  next()
}
