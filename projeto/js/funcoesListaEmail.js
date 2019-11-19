//para o botao CONFIRMA
$(document).ready(function(){
	entra();

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

//para a Lista de Emails da Caixa de Entrada: 
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

//chama a lista de Emails da Caixa de Entrada:
$("#caixaEntrada").click(function(){
	$.ajax({
		type:"POST",
		dataType: "json",
		url:"../php/cxEntrada.php",
		
		success: function(retorno){

			var conteudo = "";
			var c = 0;

			while(c < 13){
				conteudo += "<table>";
				conteudo += "<tr class='linha'>";
				conteudo += "<td class='l00'>" + "<img src = '../imagens/iconeMoca.png' class='img'>" + "</td>";
				conteudo += "<td class='l01'>" + "<b>" + retorno.remetente + "</b>" + "</td>";
				conteudo += "<td class='l01o1'>" + "    " + "</td>";
				conteudo += "<td class='l02'>" + "<b>" + retorno.assunto + "</b>" + "</td>";
				conteudo += "<td class='l01o1'>" + "    " + "</td>";
				conteudo += "<td class='l03s'>" + retorno.trecho + "</td>";
				conteudo += "</tr>";

				conteudo += "</table>";

				c++;
			}

			$("#lista").html(conteudo);
		}
	})
})

//validação de login
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
					$("#usuario").removeClass("erro");
					$("#senha").removeClass("erro");
					document.getElementById("aviso").innerHTML = "";
					window.location.href = "paginas/caixaDeEntrada.html";
				}else{
					$("#usuario").addClass("erro");
					$("#senha").addClass("erro");
					document.getElementById("aviso").innerHTML = "Login ou Senha incorreto";
				}
			}
		})
	});
}