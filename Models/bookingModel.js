const mongoose=require('mongoose')

const bookingSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:Number,
        required:true,
    },
    place:{
        type:String,
        required:true,
    },
    date:{
        type:Number,
        required:true
    }
})


const booking=mongoose.model('booking',bookingSchema)

module.exports=booking