$(document).ready(function(){
	//para o botao CONFIRMA

	entra();

/*	$("#confirma").click(function(){
		window.location.href = "paginas/caixaDeEntrada.html"
	});

/*	$("#caixaEntrada").click(function(){
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

//chama a lista de Emails da Caixa de Entrada:
	$("#caixaEntrada").click(function(){
		$.ajax({
			type:"POST",
			dataType: "json",
			url:"../php/cxEntrada.php",
		
		success: function(retorno){

			var conteudo = "";
			//linha01
			conteudo += "<table>";
			conteudo += "<tr>";
			conteudo += "<td class='l00'>" + "<img src = '../imagens/iconeMoca.png' class='img'>" + "</td>";
			conteudo += "<td class='l01'>" + "<b>" + retorno.remetente + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l02'>" + "<b>" + retorno.assunto + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l03s'>" + retorno.trecho + "</td>";
			conteudo += "</tr>";

			conteudo += "</table>";

			//linha02
			conteudo += "<table>";
			conteudo += "<tr>";
			conteudo += "<td class='l00'>" + "<img src = '../imagens/iconeMoca.png' class='img'>" + "</td>";
			conteudo += "<td class='l01'>" + "<b>" + retorno.remetente + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l02'>" + "<b>" + retorno.assunto + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l03s'>" + retorno.trecho + "</td>";
			conteudo += "</tr>";

			conteudo += "</table>";

			//linha03
			conteudo += "<table>";
			conteudo += "<tr>";
			conteudo += "<td class='l00'>" + "<img src = '../imagens/iconeMoca.png' class='img'>" + "</td>";
			conteudo += "<td class='l01'>" + "<b>" + retorno.remetente + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l02'>" + "<b>" + retorno.assunto + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l03s'>" + retorno.trecho + "</td>";
			conteudo += "</tr>";

			conteudo += "</table>";

			//linha04
			conteudo += "<table>";
			conteudo += "<tr>";
			conteudo += "<td class='l00'>" + "<img src = '../imagens/iconeMoca.png' class='img'>" + "</td>";
			conteudo += "<td class='l01'>" + "<b>" + retorno.remetente + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l02'>" + "<b>" + retorno.assunto + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l03s'>" + retorno.trecho + "</td>";
			conteudo += "</tr>";

			conteudo += "</table>";

			//linha05
			conteudo += "<table>";
			conteudo += "<tr>";
			conteudo += "<td class='l00'>" + "<img src = '../imagens/iconeMoca.png' class='img'>" + "</td>";
			conteudo += "<td class='l01'>" + "<b>" + retorno.remetente + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l02'>" + "<b>" + retorno.assunto + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l03s'>" + retorno.trecho + "</td>";
			conteudo += "</tr>";

			conteudo += "</table>";

			//linha06
			conteudo += "<table>";
			conteudo += "<tr>";
			conteudo += "<td class='l00'>" + "<img src = '../imagens/iconeMoca.png' class='img'>" + "</td>";
			conteudo += "<td class='l01'>" + "<b>" + retorno.remetente + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l02'>" + "<b>" + retorno.assunto + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l03s'>" + retorno.trecho + "</td>";
			conteudo += "</tr>";

			conteudo += "</table>";

			//linha07
			conteudo += "<table>";
			conteudo += "<tr>";
			conteudo += "<td class='l00'>" + "<img src = '../imagens/iconeMoca.png' class='img'>" + "</td>";
			conteudo += "<td class='l01'>" + "<b>" + retorno.remetente + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l02'>" + "<b>" + retorno.assunto + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l03s'>" + retorno.trecho + "</td>";
			conteudo += "</tr>";

			conteudo += "</table>";

			//linha08
			conteudo += "<table>";
			conteudo += "<tr>";
			conteudo += "<td class='l00'>" + "<img src = '../imagens/iconeMoca.png' class='img'>" + "</td>";
			conteudo += "<td class='l01'>" + "<b>" + retorno.remetente + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l02'>" + "<b>" + retorno.assunto + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l03s'>" + retorno.trecho + "</td>";
			conteudo += "</tr>";

			conteudo += "</table>";

			//linha09
			conteudo += "<table>";
			conteudo += "<tr>";
			conteudo += "<td class='l00'>" + "<img src = '../imagens/iconeMoca.png' class='img'>" + "</td>";
			conteudo += "<td class='l01'>" + "<b>" + retorno.remetente + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l02'>" + "<b>" + retorno.assunto + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l03s'>" + retorno.trecho + "</td>";
			conteudo += "</tr>";

			conteudo += "</table>";

			//linha10
			conteudo += "<table>";
			conteudo += "<tr>";
			conteudo += "<td class='l00'>" + "<img src = '../imagens/iconeMoca.png' class='img'>" + "</td>";
			conteudo += "<td class='l01'>" + "<b>" + retorno.remetente + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l02'>" + "<b>" + retorno.assunto + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l03s'>" + retorno.trecho + "</td>";
			conteudo += "</tr>";

			conteudo += "</table>";

			//linha11
			conteudo += "<table>";
			conteudo += "<tr>";
			conteudo += "<td class='l00'>" + "<img src = '../imagens/iconeMoca.png' class='img'>" + "</td>";
			conteudo += "<td class='l01'>" + "<b>" + retorno.remetente + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l02'>" + "<b>" + retorno.assunto + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l03s'>" + retorno.trecho + "</td>";
			conteudo += "</tr>";

			conteudo += "</table>";

			//linha12
			conteudo += "<table>";
			conteudo += "<tr>";
			conteudo += "<td class='l00'>" + "<img src = '../imagens/iconeMoca.png' class='img'>" + "</td>";
			conteudo += "<td class='l01'>" + "<b>" + retorno.remetente + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l02'>" + "<b>" + retorno.assunto + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l03s'>" + retorno.trecho + "</td>";
			conteudo += "</tr>";

			conteudo += "</table>";

			//linha13
			conteudo += "<table>";
			conteudo += "<tr>";
			conteudo += "<td class='l00'>" + "<img src = '../imagens/iconeMoca.png' class='img'>" + "</td>";
			conteudo += "<td class='l01'>" + "<b>" + retorno.remetente + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l02'>" + "<b>" + retorno.assunto + "</b>" + "</td>";
			conteudo += "<td class='l01o1'>" + "    " + "</td>";
			conteudo += "<td class='l03s'>" + retorno.trecho + "</td>";
			conteudo += "</tr>";

			conteudo += "</table>";

			$("#lista").html(conteudo);
			}
		})
	})
})

//testar se isso funciona
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
					window.location.href = "paginas/caixaDeEntrada.html";
				}else{
					alert("Usuario ou senha incorretos!");
				}
			}
		})
	});
}