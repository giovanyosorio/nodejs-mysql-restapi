import express from "express"
const app=express()


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

