const Agenda = require('../models/Agenda');

function AgendasRepository() {

  async function list() {
    const agendas = await Agenda.findAll({ raw: true });
    return agendas;
  }

  async function find(id) {
    const agenda = await Agenda.findByPk(id);
    return agenda;
  }

  async function save(dados) {
    const agenda = {
      name: dados.name,
      phoneNumber: dados.phoneNumber,
      email: dados.email,
      road: dados.road,
      number: dados.number,
      neighborhood: dados.neighborhood,
      city: dados.city,
      state: dados.state,
      cep: dados.cep,
      complement: dados.complement,
    }

    const agenda_created = await Agenda.create(agenda);
    return agenda_created;
  }

  async function update(id, dados) {
     const agenda = {
       name: dados.name,
       phoneNumber: dados.phoneNumber,
       email: dados.email,
       road: dados.road,
       number: dados.number,
       neighborhood: dados.neighborhood,
       city: dados.city,
       state: dados.state,
       cep: dados.cep,
       complement: dados.complement,
     };

    const agenda_updated = await Agenda.update(agenda, { where: { id: id } });
    return agenda_updated;
  }

  async function remove(id) {
    await Agenda.destroy({ where: { id: id } });
  }

  return {
    list,
    find,
    save,
    remove,
    update,
  }

}

module.exports = AgendasRepository();
