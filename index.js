$(document).ready(function () {
    $(".setIdCliente").on("click", function () {
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























//$(document).ready(function () {
//    $("#sendProdutos").on("click", function () {
//        var id = this.dataset.id;
//        $.ajax({
//            url: 'produtos.php',
//            data: {
//                id: id
//            }
//        }).done(function (data) {
//            produto = JSON.parse(data);
//            var html = "";
//            for (var i = 0; i < produto.length; i++) {
//                produto[i];
//
//                var nome = produto[i].nome_produto;
//                console.log(produto[i].nome_produto)
//                html += "NOME: " + nome + " <br>";
//                html += "--------------------<br>";
//            }
//            var popula = document.querySelector("#populaProduto");
//            popula.innerHTML = html;
//        });
//    });
//});