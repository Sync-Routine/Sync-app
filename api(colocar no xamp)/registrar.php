<?php
$con =new PDO("mysql:host=localhost;dbname=test","root", "");

$insertUsuario=$_GET["usuario"];
$insertSenha=$_GET["senha"];
$obj = $con->prepare("INSERT INTO login (usuario, senha) VALUES(?,?)");
$result = $obj->execute([$insertUsuario,$insertSenha]);

$dados= $obj->fetchAll(PDO::FETCH_ASSOC);

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");


echo($dados);

?>