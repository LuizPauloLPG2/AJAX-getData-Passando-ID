$(document).ready(function () {
    $(".setIdFuncionario").on("click", function () {
        var id = this.dataset.id;
        $.ajax({
            url: 'ajax.php',
            data: {
                id: id
            }
        }).done(function (request) {
            funcionario = JSON.parse(request);
            $("#nome_profissional").val(funcionario.nome_profissional);
            $("#email_profissional").val(funcionario.login);
            
        });
    });
});
