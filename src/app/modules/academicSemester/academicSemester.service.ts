import ApiError from '../../../errors/ApiError'
import { academicSemesterTitleCodeMapper } from './academicSemester.constant'
import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemester } from './academicSemester.model'
import httpStatus from 'http-status'

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  // check the constant code for semester
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester Code')
  }
  //  if ok, then execute
  const result = await AcademicSemester.create(payload)
  return result
}

export const AcademicSemesterService = {
  createSemester,
}
