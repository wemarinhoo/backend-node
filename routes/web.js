const express = require("express");
const router = express.Router();

const SistemaController = require("../app/controllers/SistemaController");

router.get("/", SistemaController.index);

router.get("/users", (req, res) => {
  res.render("usuarios/lista");
});

router.get("/tasks", (req, res) => {
  res.render("tasks/lista");
});

router.get("/sobre", (req, res) => {
  res.render("sobre");
});

module.exports = router;