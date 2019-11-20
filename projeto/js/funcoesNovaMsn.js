$(document).ready(function(){
//chamar função:
	escreverMsn();

	cancelarMsn();

	enviarMsn();
})

function escreverMsn(){

	$("#MSN").click(function(){
		window.location.href = "novaMensagem.html";

		var destinatario = $("#destinatario").val();
		var Cc = $("#Cc").val();
		var assunto = $("#assunto").val();
		var conteudo = $("#conteudo").val();

		$.ajax({
			type: "POST",
			url: "../php/novaMsn.php",
			dataType: "json",
			data:{

				desti: destinatario,
				cc: Cc,
				assun: assunto,
				msn: MSN
			},
			sucess: function(retorno){

			}
		})

		alert("Seu email foi enviado com sucesso!");

function cancelarMsn(){

	$("#cancela").click(function(){
		window.location.href = "caixaDeEntrada.html";
	})
}

function enviarMsn(){

	$("#envia").click(function(){
		//Isso só vai acontecer dps de salvar tudo no xml]
		window.location.href = "caixaDeEntrada.html";
	})
}