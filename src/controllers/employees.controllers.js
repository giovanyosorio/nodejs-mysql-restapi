import {pool} from "../db.js"

export const getEmployees = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM employee")
    res.send(result)
}
export const getEmployee = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM employee")
    res.send(result)
}

export const createEmployee= async(req,res)=>{
    const {name,salary}=req.body
    const [result]=await pool.query("INSERT INTO employee(name,salary) VALUES(?,?)",[name,salary])
    if(result.affectedRows===1){
        res.send({id:result.insertId,name,salary})
        console.log({result})
    }
    else{
        res.send("Error in adding employee")
    }
}


export const deleteEmployees= (req,res)=>{
    res.send("Employee details")
}

export const updateEmployees= (req,res)=>{
    res.send("Employee details")
}