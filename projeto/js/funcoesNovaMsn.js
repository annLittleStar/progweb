$(document).ready(function(){

	cancelarMsn();

	enviarMsn();
})

function cancelarMsn(){

	$("#cancela").click(function(){
		window.location.href = "caixaDeEntrada.html";
	})
}

function enviarMsn(){

	$("#envia").click(function(){
		//Isso só vai acontecer dps de salvar tudo no xml
		window.location.href = "caixaDeEntrada.html";
	})
}