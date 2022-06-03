<?php
$conexao = new PDO("mysql:host=localhost;dbname=test","root", "");
$obj = $conexao->prepare("TRUNCATE TABLE agenda");
$obj->execute();

header("Access-Control-Allow-Origin: *");
?>