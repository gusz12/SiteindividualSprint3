var quizModel = require("../models/quiz3Model");

function salvarResultado(req, res) {
    const { fkUsuario, fkQuiz, resultado, descricao  } = req.body;
    quizModel.salvarResultado(fkUsuario, fkQuiz, resultado, descricao)
        .then(() => res.status(200).send("Resultado Quiz salvo!"))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = { salvarResultado };