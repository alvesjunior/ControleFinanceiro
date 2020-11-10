const User = require('../models/User');
module.exports = {
    async create(req, res) {
        const {name, email} = req.body;

        const user = await User.create({
            name: name,
            email: name
        });
        return res.status(200).json(user);
    },
    async show(req, res) {
        const users = await User.findAll()
        return res.status(200).json(users);
    },
    async delete(req, res) {
        try {
            await User.destroy({
                where: {
                    id: req.params.id
                }
            })
            return res.status(200).json({
                msg: `Exclusão do item de ID ${req.params.id} feita com sucesso`
            });


        } catch (error) {
            return res.json({
                er: 'erro ao excluir o id ' + req.params.id
            })
        }
    }

}