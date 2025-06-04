var express = require("express");
var router = express.Router();
var dashController = require("../controllers/dashController");

router.get("/exibirResultado", dashController.exibirResultado);

module.exports = router;