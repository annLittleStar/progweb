$(document).ready(function(){
	//para o botao CONFIRMA

	$("#confirma").click(function(){
		window.location.href = "paginas/caixaDeEntrada.html"
	});

	$("#caixaEntrada").click(function(){
		return $("#teste").val("123");
	})

	$("#favoritos").click(function(){
		return $("#teste").val("321");
	})

	$("#lixoEletronico").click(function(){
		return $("#teste").val("111");
	})

	$("#rascunho").click(function(){
		return $("#teste").val("331");
	})

	$("#enviados").click(function(){
		return $("#teste").val("213");
	})

	$("#menu2").click(function(){

		var remetente = $("#remetente").val();
		var assunto = $("#assunto").val();
		var trecho = $("#trecho").val();

		$.ajax({
			type: "POST",
			url: "../php/parte01.php",
			dataType: "json",
			data:{
				ajaxRemetente: remetente,
				ajaxAssunto: assunto,
				ajaxTrecho: trecho
			},
			success: function(retorno){

			}
		})
	})

	$("#menu02").click(function(){
		$.ajax({
			type:"POST",
			dataType: "json",
			url:"../php/parte02.php",
		
		success: function(retorno){

			
			var conteudo = "";
			conteudo += "<table>";
			conteudo += "<tr>";
			conteudo += "<td>" + retorno.remetente + "</td>";
			conteudo += "</tr>";

			conteudo += "<tr>";
			conteudo += "<td>" + retorno.assunto + "</td>";
			conteudo += "</tr>";

			conteudo += "<tr>";
			conteudo += "<td>" + retorno.trecho + "</td>";
			conteudo += "</tr>";

			conteudo += "</table>";

			$("#lista").html(conteudo);
			}
		})
	})
})