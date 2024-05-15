function SistemaController() {

  function index(req, res) {
    res.render('index');
  }

  return {
    index
  }

}

module.exports = SistemaController();