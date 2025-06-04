// const { exibirResultado } = require("../controllers/dashController");
var database = require("../database/config");


// function para exibir o resultado dos jogos que já jogou
function exibirResultado(fkUsuario) {
    var instrucao = `
    select 
    u.idUsuario,
    j.nome,
    ju.fkJogo,
    sum(ju.pontuacaoObitida) as Tempo_Total
    from jogos_usuarios ju
    inner join usuarios u on ju.fkUsuario = u.idUsuario
    inner join jogos j on j.idJogo = ju.fkJogo
    where u.idUsuario = 1
    group by u.idUsuario, j.nome, ju.fkJogo;
    `;
    
    return database.executar(instrucao);
}


// colocar as functions acima aqui 
module.exports = { 
    exibirResultado
};