const mongoose = require('mongoose');
const patientSchema=mongoose.Schema(
    {
name:{
    type:String,
    default:"",
    required:true
},
age:{
    type:Number,
    default:"",
    required:true
},
address:{
    type:String,
    default:"",
    required:true
},
mobile:{
    type:Number,
    default:"",
    required:true
},
mobile:{
    type:Number,
    default:"",
    required:true
},
disease:{
    type:String,
    default:"",
    required:true
},
doctorname:{
    type:String,
    default:"",
    required:true
},

},{
    timestamps:true
})
const Patient=mongoose.model("Patient",patientSchema)
module.exports=Patient;