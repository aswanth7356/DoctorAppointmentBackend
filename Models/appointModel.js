const mongoose = require('mongoose')


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
    },
    phone:{
        type:Number,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true,
        unique:true

    },
    // userId:{
    //     type:String,
    //     required:true
    // }
})


const booking=mongoose.model('booking',bookingSchema)
module.exports=booking