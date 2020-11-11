const Receita = require('../models/Receita');
const User = require('../models/User');

module.exports = {
    async list(req, res) {
        const {user_id} = req.params;
        const { mes } = req.body;

        const user = await User.findByPk(user_id, {
            include: [
                // {
                //     association: 'addresses'
                // },
                {
                    association: 'receitas',
                    where:{
                        mes_referencia: mes
                    },
                },
            ],
        });


        if (!user) {
            return res.status(400).json({
                error: 'Sem registros'
            });
        }
        return res.status(200).json(user);
    },
    async create(req, res) {
        const {user_id} = req.params;
        const {descricao, valor, status_pg, mes_referencia} = req.body;
        const receita = await Receita.create({
            user_id,
            descricao,
            valor,
            status_pg,
            mes_referencia
        });

        return res.status(201).json(receita);
    },

}