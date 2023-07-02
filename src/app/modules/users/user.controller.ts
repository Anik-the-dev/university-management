import { NextFunction, Request, Response } from 'express'
// import { RequestHandler } from 'express-serve-static-core'
import { UserService } from './user.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const createDBUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body
    const result = await UserService.createUser(user)
    next()
    // res.status(200).json({
    //   success: true,
    //   message: 'User created successfully',
    //   data: result,
    // })
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully',
      data: result,
    })
  }
)

export default {
  createDBUser,
}
