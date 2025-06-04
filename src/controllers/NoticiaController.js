var NoticiaModel = require("../models/NoticiaModel");

function salvarResultado(req, res) {
    const { fkUsuario, fkNoticia  } = req.body;
    NoticiaModel.salvarResultado(fkUsuario, fkNoticia )
        .then(() => res.status(200).send("Hora de entrada noticia salvo!"))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = { salvarResultado };