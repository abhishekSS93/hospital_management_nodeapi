const express =require('express')
const mongoose = require('mongoose');
const app= express()
app.use(express.json)
const PatientSchema = require('./models/patient-schema')

mongoose.set('strictQuery',false)
mongoose.connect('mongodb+srv://Abhi:Abhishek0093@cluster0.5kakv.mongodb.net/').then(()=>{console.log("database connected")
app.listen(4000,()=>console.log("helllo"))}).catch((error)=>console.log("error",error))
console.log("ggggg")
app.post('/patient',async(req,res)=>{
try{
    console.log("helllo i am in patient api")
const patient =  await PatientSchema.create(req.body)
res.status(200).json(patient)
}
catch(error){
    res.status(400).json({message:error})
}})