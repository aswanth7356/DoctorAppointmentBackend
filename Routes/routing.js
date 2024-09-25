const express=require('express')
const userController=require('../Controllers/userController')
const doctorController=require('../Controllers/doctorController')
const jwtMiddle=require('../Middlewares/jwtMiddleware')
const multerMiddle=require('../Middlewares/MulterMiddleware')


const route=express.Router()

// localhost:3000/reg
route.post('/reg',userController.register) 
route.post('/log',userController.login)

route.post('/addDoctor',jwtMiddle,multerMiddle.single('picture'),doctorController.addDoctor)



module.exports=route