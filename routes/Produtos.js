const express = require('express')

const PagamentoController = require('../')

const router = express.Router();


router.get('/',)

router.post('/',(req, res,send)=>{
    res.status(201).send({
        mensagem: "Usando o post dentro da rota de produtos"
    })
});

router.get("/:id_produto", (req,res,send)=>{
    const id = req.params.id_produto;

    res.status(200).send({
        mensagem: "Usando GET de um produto exclusivo",
        id: id

    })

})
module.exports = router;