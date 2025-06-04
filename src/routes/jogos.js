var express = require("express");
var router = express.Router();
var jogoController = require("../controllers/jogoController");

router.post("/salvar", jogoController.salvarResultado);

module.exports = router;