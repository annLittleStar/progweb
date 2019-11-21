$(document).ready(function(){
//chamar função:
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

		var de = $("#de").val();
		var destinatario = $("#destinatario").val();
		var Cc = $("#Cc").val();
		var assunto = $("#assunto").val();
		var conteudo = $("#conteudo").val();

		$.ajax({
			type: "POST",
			url: "../php/novaMsn.php",
			dataType: "json",
			data:{
				de: de,
				desti: destinatario,
				cc: Cc,
				assun: assunto,
				cont: conteudo
			},
			success:function(retorno){
//				window.location.href = "caixaDeEntrada.html";
				alert("Enviado com sucesso");
				$("#destinatario").val("");
				$("#Cc").val("");
				$("#assunto").val("");
				$("#conteudo").val("");
			}
		})
	})
}
