<?php
$conexao = new PDO("mysql:host=localhost;dbname=test","root", "");

$obj = $conexao->query("select * from agenda");
$dados = $obj->fetchAll(PDO::FETCH_ASSOC);
$resultado = json_encode($dados);

header("Access-Control-Allow-Origin: *");
echo($resultado);
?>