var database = require("../database/config");

function salvarResultado(fkUsuario, fkQuiz, resultado, descricao) {
    var instrucao = `
        INSERT INTO usuarios_quizzes (fkUsuario, fkQuiz, resultado, descricao)
        VALUES (${fkUsuario}, ${fkQuiz}, ${resultado}, ${descricao});
    `;
    return database.executar(instrucao);
}

module.exports = { salvarResultado };