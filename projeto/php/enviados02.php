<?php

	$xml_string = file_get_contents("../xml/usuarios/usuario01/email/enviado/enviado02.xml");

	$xml_objeto = simplexml_load_string($xml_string);

	$dados["destino"] = trim($xml_objeto->destino);
	$dados["cc"] = trim($xml_objeto->cc);
	$dados["assunto"] = trim($xml_objeto->assunto);
	$dados["conteudo"] = trim($xml_objeto->conteudo);

	echo json_encode($dados);
?>
