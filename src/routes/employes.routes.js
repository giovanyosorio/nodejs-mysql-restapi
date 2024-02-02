import {Router }from 'express';
import {getEmployees,createEmployee,updateEmployees,deleteEmployees,getEmployee} from '../controllers/employees.controllers.js'


const router=Router()

router.get("/employees",getEmployees)
router.get("/employee/:id",getEmployee)
router.post("/employees",createEmployee)
router.put("/employees",updateEmployees)
router.delete("/employee/:id",deleteEmployees)

export default router