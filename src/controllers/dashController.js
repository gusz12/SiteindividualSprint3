var dashModel = require("../models/dashModel");

// exibir pontos totais jogador
// function exibirResultado(req, res) {
//     const { fkUsuario  } = req.body;
//     dashModel.exibirResultado(fkUsuario)
//         .then(() => res.status(200).send("Pegando dados do banco para exibição"))
//         .catch(erro => {
//             console.log(erro);
//             res.status(500).json(erro.sqlMessage);
//         });
// }



function exibirResultado(req, res) {
    dashModel.exibirResultado().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


// outras functions de exibição abaixo





// aqui colocar lista das functions acima
module.exports = { 
    exibirResultado
 };
