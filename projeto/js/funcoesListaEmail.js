//para o botao CONFIRMA
$(document).ready(function(){

//Faz login:
entra();
//Caixa de Entrada:
cxEntrada();
//Caixa de Enviados:
cxEnvios();

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

function cxEntrada(){

	$("#caixaEntrada").click(function(){
		$.ajax({
			type:"POST",
			dataType: "json",
			url:"../php/cxEntrada.php",
			
			success: function(retorno){

				var conteudo = "";
				var c = 0;

				while(c < 13){
					conteudo += "<table class='borda'>";
					conteudo += "<tr class='linha'>";
					conteudo += "<td class='l00'>" + "<img src = '../imagens/iconeMoca.png' class='imagem'>" + "</td>";
					conteudo += "<td class='l01'>" + "<b>" + retorno.remetente + "</b>" + "</td>";
					conteudo += "<td class='l01o1'>" + "    " + "</td>";
					conteudo += "<td class='l02'>" + "<b> Assunto: " + retorno.assunto + "</b>" + "</td>";
					conteudo += "<td class='l01o1'>" + "    " + "</td>";
					conteudo += "<td class='l03s'>" + retorno.trecho + "</td>";
					conteudo += "</tr>";

					conteudo += "</table>";

					c++;
				}

				$("#lista").html(conteudo);
				$("#selecionado").html("Caixa de Entrada");
			}
		})
	})
}

function cxEnvios(){
	$("#enviados").click(function(){
		$.ajax({
			type:"POST",
			dataType: "json",
			url:"../php/enviados02.php",

			success: function(retorno){

				var env = "";
				var c = 0;

				while(c < 13){
					env += "<table>";
					env += "<tr class='linha'>";
					env += "<td class='l0'>" + "<img src = '../imagens/enviado.png' class='img'>" + "</td>";
					env += "<td class='l1'>" + "<b>" + retorno.destino + "</b>" + "</td>";
					env += "<td class='l1o1'>" + "    " + "</td>";
					env += "<td class='l2'>" + "<b> Assunto: "  + retorno.assunto + "</b>" + "</td>";
					env += "<td class='l1o1'>" + "    " + "</td>";
					env += "<td class='l3s'>" + retorno.conteudo + "</td>";
					env += "</tr>";

					env += "</table>";

					c++;
				}

				$("#lista").html(env);
				$("#selecionado").html("Enviados");
			}
		})
	})
}
