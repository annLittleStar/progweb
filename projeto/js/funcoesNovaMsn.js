$(document).ready(function(){

	escreverMsn();

	cancelarMsn();

	enviarMsn();
})

function escreverMsn(){

	$("#MSN").click(function(){
		$.ajax({
			 type: "POST",
			 dataType: "json",
			 url:"../php/novaMsn.php",

			 sucess: function(retorno){

			 		 var conteudo= "../paginas/novaMsn.html";

				$("#lista").html(conteudo);
			 }
		})
	})
}

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