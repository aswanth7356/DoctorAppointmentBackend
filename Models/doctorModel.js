const mongoose=require('mongoose')


const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    field:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    consultingTime:{
        type:String,
        required:true,
        unique:true,    
    },
    picture:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})


const doctor=mongoose.model('doctor',doctorSchema)

module.exports=doctor