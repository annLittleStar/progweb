<?php

	$xml_string = file_get_contents("../xml/usuarios/usuario01/email/enviado/enviado01.xml");

	$xml_objeto = simplexml_load_string($xml_string);

	$dados["quemEnviou"] = trim($xml_objeto->quemEnviou);
	$dados["assunto"] = trim($xml_objeto->assunto);
	$dados["texto"] = trim($xml_objeto->texto);

	echo json_encode($dados);

?>
