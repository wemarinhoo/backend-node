const Agenda = require("../models/Task");
const agendasRepository = require("../repositories/AgendasRepository");

function AgendaController() {
  async function list(req, res) {
    const agendas = await agendasRepository.list();

    res.render("agendas/list", {
      title: "Lista de Agendas",
      agendas: agendas,
    });
  }

  function create(req, res) {
    res.render("agendas/create");
  }

  async function save(req, res) {
    await agendasRepository.save(req.body);
    res.redirect("/agendas");
  }

  async function remove(req, res) {
    await agendasRepository.remove(req.params.id);
    res.redirect("/agendas");
  }

  async function edit(req, res) {
    const agenda = await agendasRepository.find(req.params.id);
    res.render("agendas/edit", { agenda: agenda });
  }

  async function update(req, res) {
    await agendasRepository.update(req.body.id, req.body);
    res.redirect("/agendas");
  }

  async function updateStatus(req, res) {
    const done = req.body.done === "0" ? true : false;

    await agendasRepository.updateStatus(req.params.id, done);
    res.redirect("/tasks");
  }

  return {
    create,
    save,
    list,
    remove,
    edit,
    update,
    updateStatus,
  };
}

module.exports = AgendaController();
