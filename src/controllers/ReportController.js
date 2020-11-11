const User = require('../models/User');
const { Op } = require('sequelize');
module.exports ={
    async index(req, res){

        const user = await User.findAll({
            attributes:['name', 'email'],
            where:{
                email:{
                  [Op.like]: '%hotmail.com.br'
                }
            },
        })

        return res.json( user);
    }
}