const doctor = require('../Models/doctorModel')


exports.addDoctor = async (req, res) => {
    const { name, field, location, consultingTime, image } = req.body
    const picture=req.file.filename
    const userId=req.payload    

    try {
        const existingDoctor = await doctor.findOne({ consultingTime })
        if (existingDoctor) {
            res.status(406).json("Already Doctors are available this time")
        }
        else {
            const newDoctor = new doctor({
                name, field, location, consultingTime, picture, userId
            })
            await newDoctor.save()
            res.status(201).json(newDoctor)
        }
    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
    }
    
}   