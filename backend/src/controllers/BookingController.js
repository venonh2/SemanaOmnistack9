const Booking = require('../models/Booking')



module.exports = {
    async store(req, res) {
        const { user_id } = req.headers; 
        
        const { spot_id } = req.params;

        const { date } = req.body;

        const booking = await Booking.create({
            user_id,
            spot_id,
            date,
        })

        return res.json(booking)

    }

}