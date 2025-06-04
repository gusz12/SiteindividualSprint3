var database = require("../database/config");

function salvarResultado(fkUsuario, fkJogo, pontos) {
    var instrucao = `
        INSERT INTO jogos_usuarios (fkUsuario, fkJogo, pontuacaoObitida, datahora)
        VALUES (${fkUsuario}, ${fkJogo}, ${pontos}, now());
    `;
    return database.executar(instrucao);
}

module.exports = { salvarResultado };