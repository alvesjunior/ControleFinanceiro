const Parcelas = require('../models/Parcelas');
module.exports = {
    async list(req, res) {
        const parcelas = await Parcelas.findAll();
        return res.status(200).json(parcelas);
    },
    async create(req, res) {
        const {conta_id, valor, status_pg} = req.body;

        const parcela = await Parcelas.create({
            conta_id,
            valor,
            status_pg
        });
        res.status(201).send(parcela);
    },
    async update(req, res) {
        const {parcela_id} = req.params;
        const { status_pg } = req.body;

        const parcela = await Parcelas.update({
                status_pg
            },{
            where:{
                id: parcela_id
            }
        });

        return res.status(200).json(parcela);

    }

}