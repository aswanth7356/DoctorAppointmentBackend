const booking = require('../Models/appointModel')

exports.bookingSubmit = async (req, res) => {
    const { firstName, lastName, email, phone, place, date } = req.body

    try{
        const existingBooking = await booking.findOne({ date })
        if (existingBooking) {
            res.status(406).json("Already Booked This User")
        }
        else {
            const newBooking = new booking({
                firstName, lastName, email, phone, place, date
            })
            await newBooking.save()
            res.status(201).json(newBooking)
        }
    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
    }
    
}
