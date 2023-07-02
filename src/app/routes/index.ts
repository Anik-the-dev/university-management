import express from 'express'
import { UserRoutes } from '../modules/users/user.route'
import { AcademicRoutes } from '../modules/academicSemester/academicSemester.route'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },

  {
    path: '/academic-semesters',
    route: AcademicRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

// router.use('/users/', UserRoutes)
// router.use('/academic-semesters/', AcademicRoutes)

export default router
