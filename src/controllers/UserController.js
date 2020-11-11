const User = require('../models/User');
module.exports = {
    async create(req, res) {
        const {name, email} = req.body;

        const user = await User.create({
            name: name,
            email: email
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
    },
    async update(req, res) {
        const {user_id} = req.params;
        const {nome, email} = req.body;

        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(400).send({msg: " User not found"});
        }
        const user_update = await User.update({
                nome,
                email
            }, {
                where: {
                    id: user_id
                }
            }
        );
        return res.status(200).send(user_update);
    }

}