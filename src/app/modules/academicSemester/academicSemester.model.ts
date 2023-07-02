import { Schema, model, Model } from 'mongoose'
import { IAcademicSemester } from './academicSemester.interface'
import { MonthEnum } from './academicSemester.constant'
import ApiError from '../../../errors/ApiError'
import httpStatus from 'http-status'

type academicSemesterModel = Model<IAcademicSemester, object>

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: { type: String, required: true, enum: ['Autumn', 'Summer', 'Fall'] },
    year: { type: Number, required: true },
    code: { type: String, required: true, enum: ['01', '02', '03'] },
    startMonth: { type: String, required: true, enum: MonthEnum },
    endMonth: { type: String, required: true, enum: MonthEnum },
  },
  { timestamps: true }
)

// Checking is same semester inputed in Same Year or not
// duplicate year && duplicate semester not possible
academicSemesterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  })
  if (isExist) {
    throw new ApiError(httpStatus.CONFLICT, 'Academic Semester already exists')
  }
  next()
})

export const AcademicSemester = model<IAcademicSemester, academicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
)
