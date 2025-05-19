var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM usuarios WHERE idUsuario = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT idUsuario, nome, sobrenome, email FROM usuarios`;

  return database.executar(instrucaoSql);
}

function buscarPorCnpj(idUsuario) {
  var instrucaoSql = `SELECT * FROM usuarios WHERE usuario = '${idUsuario}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(nome, senha) {
  var instrucaoSql = `INSERT INTO usuarios (nome, senha) VALUES ('${nome}', '${senha}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar };
