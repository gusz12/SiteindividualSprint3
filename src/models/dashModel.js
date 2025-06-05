// const { exibirResultado } = require("../controllers/dashController");
var database = require("../database/config");


// function para exibir o resultado dos jogos que já jogou
function exibirResultadoQuiz1(fkUsuario) {
    var instrucao = `
    select * from usuarios_quizzes uq
    inner join usuarios u
    on u.idUsuario = uq.fkUsuario
    where u.idUsuario = ${fkUsuario} and uq.fkQuiz = 1;
    `;
    
    return database.executar(instrucao);
}

function exibirResultadoQuiz2(fkUsuario) {
    var instrucao = `
    select * from usuarios_quizzes uq
    inner join usuarios u
    on u.idUsuario = uq.fkUsuario
    where u.idUsuario = ${fkUsuario} and uq.fkQuiz = 2;
    `;
    
    return database.executar(instrucao);
}

function exibirResultadoQuiz3(fkUsuario) {
    var instrucao = `
    select * from usuarios_quizzes uq
    inner join usuarios u
    on u.idUsuario = uq.fkUsuario
    where u.idUsuario = ${fkUsuario} and uq.fkQuiz = 3;
    `;
    
    return database.executar(instrucao);
}

// ------------------------------------------------------------------
// jogos
function exibirResultadoJogo1(fkUsuario) {
    var instrucao = `
    select * from jogos_usuarios ju
    inner join usuarios u
    on u.idUsuario = ju.fkUsuario
    where u.idUsuario = ${fkUsuario} and ju.fkJogo = 1;
    `;
    
    return database.executar(instrucao);
}
function exibirResultadoJogo2(fkUsuario) {
    var instrucao = `
    select * from jogos_usuarios ju
    inner join usuarios u
    on u.idUsuario = ju.fkUsuario
    where u.idUsuario = ${fkUsuario} and ju.fkJogo = 2;
    `;
    
    return database.executar(instrucao);
}
function exibirResultadoJogo3(fkUsuario) {
    var instrucao = `
    select * from jogos_usuarios ju
    inner join usuarios u
    on u.idUsuario = ju.fkUsuario
    where u.idUsuario = ${fkUsuario} and ju.fkJogo = 3;
    `;
    
    return database.executar(instrucao);
}




function exibirTempJogadores(fkUsuario) {
    var instrucao = `
    select * from jogos_usuarios ju
    inner join usuarios u
    on u.idUsuario = ju.fkUsuario
    where u.idUsuario = ${fkUsuario};
    `;
    
    return database.executar(instrucao);
}

function exibirEpJogadores(fkUsuario) {
    var instrucao = `
    select * from jogos_usuarios ju
    inner join usuarios u
    on u.idUsuario = ju.fkUsuario
    where u.idUsuario = ${fkUsuario};
    `;
    
    return database.executar(instrucao);
}
// colocar as functions acima aqui 
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