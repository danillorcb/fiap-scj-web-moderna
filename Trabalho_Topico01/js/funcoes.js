var assuntos = [
    {
        "id": "1",
        "assunto": "Desenvolvimento de sistemas"
    },
    {
        "id": "2",
        "assunto": "Oportunidade de emprego"
    },
    {
        "id": "3",
        "assunto": "Música, Rock e instrumentos musicais"
    },
    {
        "id": "4",
        "assunto": "Quadrinhos, séries ou cinema"
    }
];

var lista = document.getElementById("listaAssuntos");

function limparLista() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}

function exibirAssuntos() {
    limparLista();

    //Acrescentando item default
    var option = document.createElement("option");
    $(option).html("Motivo do contato/Assunto");
    lista.appendChild(option);

    $.each(assuntos, function(i, assunto){
        var option = document.createElement("option");
        $(option).html(assunto.assunto);
        $(option).attr("value", assunto.id);
        lista.appendChild(option);
    });
}

exibirAssuntos();