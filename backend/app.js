const express =require('express')
const app=express()
const studentRoutes=require("./routes/studentsRoutes")

app.use(express.json())
app.use(express.urlencoded( {extended: true} ))


app.use("/v1/students",studentRoutes)


module.exports = app;


