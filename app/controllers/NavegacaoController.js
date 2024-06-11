function NavegacaoController() {

    function index(request, response) {
        return response.render("index", {
            title: "Página Inicial"
        });
    }

    function usuarios(request, response) {
        return response.render("users/index", {
            title: "Lista de Usuários"
        });
    }

    function sobre(request, response) {
        return response.render("sobre", {
            title: "Sobre a empresa"
        });
    }
    
    function agenda(request, response) {
        return response.render("agendas", {
            title: "Agendas"
        });
    }


    function notFound(request, response) {
        return response.render("404");
    }

    return {
        usuarios,
        sobre,
        index,
        agenda,
        notFound
    }
}

module.exports = NavegacaoController();
