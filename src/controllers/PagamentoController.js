const Pagamento = require('../models/Pagamento');

module.exports = {

    async index(req, res){
        const { conta_id } = req.params;

        const conta = await Pagamento.findByPk(conta_id, {
            include:{association: 'parcelas'}
        });


        if (!conta){
            return res.status(400).json({
                error: 'Nenhum endereço encontrado'
            });
        }
        return res.status(200).json(conta);

    },

    async list(req, res) {
        try {
            const pag = await Pagamento.findAll();
            return res.status(200).json(pag);
        } catch (erro) {
            return console.error('Erro na listagem: ', erro);

        }
    },
    async create(req, res) {
        const {nome, mes, data_vencimento, valor} = req.body;

        const conta = await Pagamento.create({
            nome,
            mes,
            data_vencimento,
            valor
        })
        return res.status(201).json(conta);
    }
}