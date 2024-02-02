import {pool} from "../db.js"

export const getEmployees = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM employee")
    res.send(result)
}


export const createEmployee= (req,res)=>{
    res.send("Employee details")

}


export const deleteEmployees= (req,res)=>{
    res.send("Employee details")
}

export const updateEmployees= (req,res)=>{
    res.send("Employee details")
}