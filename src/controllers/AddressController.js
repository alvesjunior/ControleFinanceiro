const Address = require('../models/Address');
const User = require('../models/User');
module.exports = {
    async store(req, res) {
        const {user_id} = req.params;
        const {zipcode, street, number} = req.body;

        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        const addres = await Address.create({
            zipcode,
            street,
            number,
            user_id,
            });
        return res.status(201).json(addres);
    },
    async list(req, res){
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include:{association: 'addresses'}
        });


        if (!user){
            return res.status(400).json({
                error: 'Nenhum endereço encontrado'
            });
        }
        return res.status(200).json(user);
    }
};