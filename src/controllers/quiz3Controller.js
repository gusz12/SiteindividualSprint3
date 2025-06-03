var quizModel = require("../models/quiz3Model");

function salvarResultado(req, res) {
    const { fkUsuario, fkQuiz, resultado  } = req.body;
    quizModel.salvarResultado(fkUsuario, fkQuiz, resultado )
        .then(() => res.status(200).send("Resultado salvo!"))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = { salvarResultado };