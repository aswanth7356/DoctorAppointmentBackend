const express=require('express')
const userController=require('../Controllers/userController')
const doctorController=require('../Controllers/doctorController')
const jwtMiddle=require('../Middlewares/jwtMiddleware')
const multerMiddle=require('../Middlewares/MulterMiddleware')
const appointmentController=require('../Controllers/appointmentController')


const route=express.Router()

// localhost:3000/reg
route.post('/reg',userController.register) 
route.post('/log',userController.login)

route.post('/addDoctor',jwtMiddle,multerMiddle.single('picture'),doctorController.addDoctor)
route.get('/viewDoctor',jwtMiddle,doctorController.getUserDoctor)
route.delete('/deleteDoctor/:id',jwtMiddle,doctorController.deleteDoctor)
route.put('/updateDoctor/:id',jwtMiddle,multerMiddle.single('picture'),doctorController.UpdateDoctor)


route.post('/viewBooking',appointmentController.bookingSubmit)



module.exports=route