<?php

	$destino = $_POST["desti"];
	$email = $_POST["email"];
	$cc = $_POST["cc"];
	$assunto = $_POST["assun"];
	$msn = $_POST["msn"];

	$xml = new DOMDocument("1.0");

	$dados = $xml -> createElement ("email", $email);

	$xml_email = $xml -> createElement ("destino", $destino);
	$xml_destino = $xml -> createElement ("destino", $destino);
	$xml_cc = $xml -> createElement ("cc", $cc);
	$xml_msn = $xml -> createElement ("msn", $msn);

	$dados -> appendChild($xml_destino);
	$dados -> appendChild($xml_cc);
	$dados -> appendChild($xml_assunto);
	$dados -> appendChild($xml_msn);
	
	$xml -> appendChild($dados);

	$xml ->save("../xml/usuarios/usuario01/enviado/enviado02.xml");

	echo json_encode("xml criado");
