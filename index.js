$(document).ready(function () {
    $(".setIdFuncionario").on("click", function () {
        var id = $(this).data('id');
        $.ajax({
            url: 'ajax.php',
            method: 'POST',
            data: {
                id: id
            },
            success: res => {
                funcionario = JSON.parse(res);
                $("#nome_profissional").val(funcionario.nome_profissional);
                $("#email_profissional").val(funcionario.login);
            });
        });
    });
});
