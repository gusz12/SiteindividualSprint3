var database = require("../database/config");

function salvarResultado(fkUsuario, fkQuiz, resultado) {
    var instrucao = `
        INSERT INTO usuarios_quizzes (fkUsuario, fkQuiz, resultado)
        VALUES (${fkUsuario}, '${fkQuiz}', ${resultado});
    `;
    return database.executar(instrucao);
}

module.exports = { salvarResultado };