var express = require("express");
var router = express.Router();
var dashController = require("../controllers/dashController");

router.get("/exibirResultadoQuiz1/:fkUsuario", dashController.exibirResultadoQuiz1);
router.get("/exibirResultadoQuiz2/:fkUsuario", dashController.exibirResultadoQuiz2);
router.get("/exibirResultadoQuiz3/:fkUsuario", dashController.exibirResultadoQuiz3);

router.get("/exibirResultadoJogo1/:fkUsuario", dashController.exibirResultadoJogo1);
router.get("/exibirResultadoJogo2/:fkUsuario", dashController.exibirResultadoJogo2);
router.get("/exibirResultadoJogo3/:fkUsuario", dashController.exibirResultadoJogo3);

router.get("/exibirTempJogadores", dashController.exibirTempJogadores);
router.get("/exibirEpJogadores", dashController.exibirEpJogadores);

module.exports = router;