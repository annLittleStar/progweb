<?php

//pronto
	$de = $_POST["de"];
	$destino = $_POST["desti"];
	$cc = $_POST["cc"];
	$assunto = $_POST["assun"];
	$conteudo = $_POST["cont"];

	$xml = new DOMDocument("1.0");

	$enviado = $xml->createElement("enviado");

	$xml_de = $xml->createElement("de", $de);
	$xml_destino = $xml->createElement("destino", $destino);
	$xml_cc = $xml->createElement("cc", $cc);
	$xml_assunto = $xml->createElement("assunto", $assunto);
	$xml_cont = $xml->createElement("conteudo", $conteudo);

	$enviado->appendChild($xml_de);
	$enviado->appendChild($xml_destino);
	$enviado->appendChild($xml_cc);
	$enviado->appendChild($xml_assunto);
	$enviado->appendChild($xml_cont);
	
	$xml->appendChild($enviado);

	$xml->save("../xml/usuarios/usuario01/email/enviado/enviado02.xml");

	echo json_encode("xml criado");
?>
