var express = require("express");
var router = express.Router();
var quizController = require("../controllers/quiz3Controller");

router.post("/salvar", quizController.salvarResultado);

module.exports = router;