var database = require("../database/config");

function salvarResultado(fkUsuario, fkNoticia) {
    var instrucao = `
        INSERT INTO usuario_noticias (fkUsuario, fkNoticia, datahora)
        VALUES (${fkUsuario}, ${fkNoticia}, now());
    `;
    return database.executar(instrucao);
}

module.exports = { salvarResultado };