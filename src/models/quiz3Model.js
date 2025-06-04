var database = require("../database/config");

function salvarResultado(fkUsuario, fkQuiz, resultado, descricao) {
    var instrucao = `
        INSERT INTO usuarios_quizzes (fkUsuario, fkQuiz, resultado, descricao, datahora)
        VALUES (${fkUsuario}, ${fkQuiz}, ${resultado}, ${descricao}, now());
    `;
    return database.executar(instrucao);
}

module.exports = { salvarResultado };