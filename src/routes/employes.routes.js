import {Router }from 'express';


const router=Router()

router.get("/employees",(req,res)=>{
    res.send("Employee details")
})
router.post("/employees",(req,res)=>{
    res.send("Employee details")
})

router.put("/employees",(req,res)=>{
    res.send("Employee details")
})

router.delete("/employees",(req,res)=>{
    res.send("Employee details")
})

export default router