var dashModel = require("../models/dashModel");




function exibirResultadoQuiz1(req, res) {
    
    // Aqui faço a requisição do fkUsuario que vem na pagina da dash para usar como parametro nas funcoes
    let fkUsuario = req.params.fkUsuario;
    dashModel.exibirResultadoQuiz1(fkUsuario).then(function (resultado) {
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

function exibirResultadoQuiz2(req, res) {
    // Aqui faço a requisição do fkUsuario que vem na pagina da dash para usar como parametro nas funcoes
    let fkUsuario = req.params.fkUsuario;
    dashModel.exibirResultadoQuiz2(fkUsuario).then(function (resultado) {
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

function exibirResultadoQuiz3(req, res) {
    // Aqui faço a requisição do fkUsuario que vem na pagina da dash para usar como parametro nas funcoes
    let fkUsuario = req.params.fkUsuario;
    dashModel.exibirResultadoQuiz3(fkUsuario).then(function (resultado) {
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



// ------------------------------------------------------------------
// jogos
function exibirResultadoJogo1(req, res) {
    // Aqui faço a requisição do fkUsuario que vem na pagina da dash para usar como parametro nas funcoes
    let fkUsuario = req.params.fkUsuario;
    dashModel.exibirResultadoJogo1(fkUsuario).then(function (resultado) {
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

function exibirResultadoJogo2(req, res) {
    // Aqui faço a requisição do fkUsuario que vem na pagina da dash para usar como parametro nas funcoes
    let fkUsuario = req.params.fkUsuario;
    dashModel.exibirResultadoJogo2(fkUsuario).then(function (resultado) {
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

function exibirResultadoJogo3(req, res) {
    // Aqui faço a requisição do fkUsuario que vem na pagina da dash para usar como parametro nas funcoes
    let fkUsuario = req.params.fkUsuario;
    dashModel.exibirResultadoJogo3(fkUsuario).then(function (resultado) {
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

// ------------------------------------------------------------------
// DadosJogadores
    function exibirTempJogadores(req, res) {
    dashModel.exibirTempJogadores().then(function (resultado) {
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
    function exibirEpJogadores(req, res) {
    // Aqui faço a requisição do fkUsuario que vem na pagina da dash para usar como parametro nas funcoes
    let fkUsuario = req.params.fkUsuario;
    dashModel.exibirEpJogadores(fkUsuario).then(function (resultado) {
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

// aqui colocar lista das functions acima
module.exports = { 
    exibirResultadoQuiz1,
    exibirResultadoQuiz2,
    exibirResultadoQuiz3,

    exibirResultadoJogo1,
    exibirResultadoJogo2,
    exibirResultadoJogo3,

    exibirTempJogadores,
    exibirEpJogadores
 };
