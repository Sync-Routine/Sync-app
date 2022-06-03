<?php
$conexao = new PDO("mysql:host=localhost;dbname=test","root", "");

$obj = $conexao->prepare("INSERT INTO agenda (conteudo) values (?)");
$conteudo=$_GET["conteudo"];
$obj->execute([$conteudo]);

$codigo=$conexao->lastInsertId();
echo($codigo);
header("Access-Control-Allow-Origin: *");
?>