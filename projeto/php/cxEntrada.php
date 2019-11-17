<?php

	$xml_string = file_get_contents("../xml/listaCxEntrada.xml");

	$xml_objeto = simplexml_load_string($xml_string);

	$dados["remetente"] = trim($xml_objeto->remetente);
	$dados["assunto"] = trim($xml_objeto->assunto);
	$dados["trecho"] = trim($xml_objeto->trecho);

	echo json_encode($dados);

?>
