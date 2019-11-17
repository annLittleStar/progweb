<?php

	$usuario = $_POST["user"];
	$senha = $_POST["pass"];

	if ($usuario == "teste" && $senha = "123") {
		$retorna["resultado"] = "valido";
	}else {
		$retorna["resultado"] = "invalido";
	}

	$retorna_json = json_encode($retorna);
	echo $retorna_json;

?>
