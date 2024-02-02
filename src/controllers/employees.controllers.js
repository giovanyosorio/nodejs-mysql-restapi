import {pool} from "../db.js"

export const getEmployees = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM employee")
    res.send(result)
}
export const getEmployee = async (req, res) => {
    const {id}=req.params
    const [result] = await pool.query("SELECT * FROM employee WHERE id=?",[id])
    if(result.length===0){
        res.send("No employee found")
    }
    else{
        console.log(result)
        res.status(200).send(result)
    }
}

export const createEmployee= async(req,res)=>{
    const {name,salary}=req.body
    const [result]=await pool.query("INSERT INTO employee(name,salary) VALUES(?,?)",[name,salary])
    if(result.affectedRows===1){
        res.send({id:result.insertId,name,salary})
        console.log({result})
    }
    else{
        res.status(500).send("Error in creating employee")
    }
}


export const deleteEmployees= async(req,res)=>{
    const {id}=req.params
    const [result] = await pool.query("DELETE FROM employee WHERE id=?",[id])
    if(result.affectedRows===1){
        console.log(result)
        res.send("Employee deleted")
    }
    else{
        res.status(404).send("No employee found")
    }
}

export const updateEmployee= async (req,res)=>{
   const {id}=req.params
    const {name,salary}=req.body
    const [result] = await pool.query("UPDATE employee SET name=IFNULL(?,name),salary=IFNULL(?,salary) WHERE id=?",[name,salary,id])
    if(result.affectedRows===1){
        console.log(result)
    const [row]=await pool.query("SELECT * FROM employee WHERE id=?",[id])
    res.send(row)
    }
    else{
        res.status(404).send("No employee found")
    }
}