const express =require('express')
const app=express()


app.use(express.json())
app.use(express.urlencoded( {extended: true} ))


app.get('/students/names',(req,res)=>{
    return res.send("Hey")
})


module.exports = app;


