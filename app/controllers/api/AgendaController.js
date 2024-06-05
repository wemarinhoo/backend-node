const agendasRepository = require("../../agendas/AgendasRepository");

function AgendaController() {
  async function list(req, res) {
    const agendas = await agendasRepository.list();
    res.status(200).json(agendas);
  }

  async function show(req, res) {
    try {
      const agenda = await agendasRepository.find(req.params.id);

      if (!agenda) {
        return res.status(404).send({
          message: "Agenda não encontrada.",
        });
      }

      res.status(200).json(agenda);
    } catch (error) {
      res.status(500).json({
        message: "Agenda não encontrada",
      });
    }
  }

  async function save(req, res) {
    try {
      const agenda = await agendasRepository.save(req.body);
      res.status(201).json(agenda);
    } catch (error) {
      res.status(400).json(error.details);
    }
  }

  async function update(req, res) {
    const agenda = await agendasRepository.find(req.params.id);

    if (!agenda) {
      return res.status(404).send({
        message: "Agenda não encontrada.",
      });
    }

    await agendasRepository.update(req.params.id, req.body);

    res.json({
      message: "Agenda atualizada.",
    });
  }

  async function remove(req, res) {
    const agenda = await agendasRepository.find(req.params.id);

    if (!agenda) {
      return res.status(404).send({
        message: "Agenda não encontrada.",
      });
    }

    await agendasRepository.remove(req.params.id);

    res.status(200).json({
      message: "Agenda removida.",
    });
  }

  async function updateStatus(req, res) {
    const agenda = await agendasRepository.find(req.params.id);

    if (!agenda) {
      return res.status(404).send({
        message: "Agenda não encontrada.",
      });
    }

    await agendasRepository.updateStatus(req.params.id, req.body.done);

    res.json({
      message: "Status da Agenda atualizado.",
    });
  }

  return {
    save,
    list,
    show,
    remove,
    update,
    updateStatus,
  };
}

module.exports = AgendaController();
