import express from "express"
const app=express()
import {pool} from "./db.js"


app.get("/ping", async (req,res)=>{
    const [result]=await pool.query("SELECT 'pong' AS response")
    res.send(result[0]) 
})  

app.get("/employees",(req,res)=>{
    res.send("Employee details")
})
app.post("/employee",(req,res)=>{
    res.send("Employee details")
})

app.put("/employee",(req,res)=>{
    res.send("Employee details")
})

app.delete("/employee",(req,res)=>{
    res.send("Employee details")
})

app.listen(3000,()=>{
    console.log("Server is running at port 3000")
})

