const express=require('express')
const userController=require('../Controllers/userController')


const route=express.Router()

// localhost:3000/reg
route.post('/reg',userController.register) 
route.post('/log',userController.login)



module.exports=route