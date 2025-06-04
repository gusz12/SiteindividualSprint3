var jogoModel = require("../models/jogoModel");

function salvarResultado(req, res) {
    const { fkUsuario, fkJogo, pontos  } = req.body;
    jogoModel.salvarResultado(fkUsuario, fkJogo, pontos )
        .then(() => res.status(200).send("dados jogo salvo!"))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = { salvarResultado };