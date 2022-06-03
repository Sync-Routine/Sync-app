<?php
$con =new PDO("mysql:host=localhost;dbname=test","root", "");

$obj = $con->prepare("select * from login where usuario=? and senha=?");
$requestLogin=$_GET["usuario"];
$requestSenha=$_GET["senha"];
$obj->execute([$requestLogin,$requestSenha]);

$dados= $obj->fetchAll(PDO::FETCH_ASSOC);
$resultado= json_encode($dados);

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");



echo($resultado);

?>