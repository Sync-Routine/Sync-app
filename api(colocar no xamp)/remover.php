<?php
$conexao = new PDO("mysql:host=localhost;dbname=test","root", "");

$obj = $conexao->prepare("DELETE FROM agenda WHERE codigo=?");
$codigo=$_GET["codigo"];
$obj->execute([$codigo]);

header("Access-Control-Allow-Origin: *");
?>