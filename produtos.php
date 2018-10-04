<?php

require_once ("./conexao.php");

$sql = Db::_conexao()->query("select * from tbproduto")->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($sql);
