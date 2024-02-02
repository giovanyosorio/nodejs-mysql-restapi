import {Router }from 'express';
import {getEmployees,createEmployee,updateEmployees,deleteEmployees} from '../controllers/employees.controllers.js'


const router=Router()

router.get("/employees",getEmployees)
router.post("/employees",createEmployee)
router.put("/employees",updateEmployees)
router.delete("/employees",deleteEmployees)

export default router