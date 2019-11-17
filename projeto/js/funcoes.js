$(document).ready(function(){
	//para o botao CONFIRMA

	entra();

/*	$("#confirma").click(function(){
		window.location.href = "paginas/caixaDeEntrada.html"
	});

	$("#caixaEntrada").click(function(){
		return $("#teste").val("123");
	})
*/
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

	$("#caixaEntrada").click(function(){
		$.ajax({
			type:"POST",
			dataType: "json",
			url:"../php/cxEntrada.php",
		
		success: function(retorno){

			
			var conteudo = "";
			conteudo += "<table class='tabelaLista'>";
			conteudo += "<tr class='linha'>";
			conteudo += "<td class='td1'>" + retorno.remetente + "</td>";
			conteudo += "<td class='td2'>" + "<b>" + retorno.assunto + "</b>" + "</td>";
			conteudo += "<td class='td3'>" + retorno.trecho + "</td>";
			conteudo += "</tr>";

			conteudo += "</table>";

			$("#lista").html(conteudo);
			}
		})
	})
})

//testar se isso funciona
function entra(){

	$("#confirma").click(function(){

		$.ajax({
			type: "POST",
			url: "php/validaLogin.php",
			dataType: "json",
			data:{
				user: $("#usuario").val(),
				pass: $("#senha").val()
			},
			success: function(retorno){
				if (retorno.resultado == "valido") {
					window.location.href = "paginas/caixaDeEntrada.html";
				}else{
					alert("Usuario invalido");
				}
			}
		})
	});
}