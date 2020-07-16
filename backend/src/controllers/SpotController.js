const Spot = require("../models/Spot");
const User = require('../models/User');
const { Op } = require('sequelize')

module.exports = {
    async index(req, res){
        const { tech } = req.query;

        const spots = await Spot.findAll({
            where: {
                 techs: { [Op.like]: `${tech}%`}
            }
        })

        return res.json(spots)

    },

    async store(req, res) {
        const { filename } = req.file; // é o caminho da thumbnail 
        const { company, price, techs } = req.body;
        const { user_id } = req.headers;

        const user = await User.findByPk(user_id);

    //    console.log(user);

        if(!user) {
            return res.status(400).json({error: 'Not Found'})
        }

        const spot = await Spot.create({
            thumbnail: filename,
            company,
            price,
            techs: techs.trim(),
            user_id
        })
        
        return res.json(spot)
    }
}