<?php

	$xml_string = file_get_contents("../xml/dadosLogin.xml");

	$xml_objeto = simplexml_load_string($xml_string);

	$dados["user"] = $xml_objeto->usuario;
	$dados["pass"] = $xml_objeto->senha;

	$usuario = $_POST["user"];
	$senha = $_POST["pass"];

	if ($usuario == $dados && $senha = $dados) {
		$retorna["resultado"] = "valido";
	}else {
		$retorna["resultado"] = "invalido";
	}

	$retorna_json = json_encode($retorna);
	echo $retorna_json;

?>
