var express = require("express");
var router = express.Router();
var NoticiaController = require("../controllers/NoticiaController");

router.post("/salvar", NoticiaController.salvarResultado);

module.exports = router;