const doctor = require('../Models/doctorModel')


exports.addDoctor = async (req, res) => {
    const { name, field, location, consultingTime, image } = req.body
    const picture = req.file.filename
    const userId = req.payload

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
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }

}



exports.getUserDoctor = async (req, res) => {
    try {
        const userId = req.payload
        const userDoctor = await doctor.find({ userId })
        res.status(200).json(userDoctor)
    }
    catch (err) {
        res.status(400).json(err)
    }
}


exports.deleteDoctor = async (req, res) => {
    const { id } = req.params
    try {
        const result = await doctor.findByIdAndDelete({ _id: id })
        res.status(200).json("Doctor Deleted!!")
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }

}



exports.UpdateDoctor = async (req, res) => {
    try {
        const { id } = req.params
        const { name, field, location, consultingTime, picture } = req.body
        const doctorImage=req.file?req.file.filename:picture

        const result = await doctor.findByIdAndUpdate({ _id: id }, { name, field, location, consultingTime, picture:doctorImage })
        await result.save()
        res.status(200).json(result)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
}
