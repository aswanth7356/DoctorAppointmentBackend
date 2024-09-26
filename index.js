require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./Routes/routing')
require('./DBconnection/dbconn')



const DctrServer=express()



DctrServer.use(cors())
DctrServer.use(express.json())
DctrServer.use(router)
DctrServer.use('/upload',express.static('./uploads'))



const PORT=3000

DctrServer.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`);
}) 

DctrServer.get('/',(req,res)=>{
    res.status(200).send("<H1>Hello</H1>")
})