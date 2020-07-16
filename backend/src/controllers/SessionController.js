const User = require('../models/User')

module.exports = {

    async store(req, res){
        const { email } = req.body;

        const user = await User.findOrCreate({
            where: { email: email}
        })

        return res.json(user);
    },

    


}