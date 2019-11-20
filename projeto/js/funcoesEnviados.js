$(document).ready(function(){
	$("#menu3").click(function(){

//para a Lista de Emails enviados: 
	var quemEnviou = $("#quemEnviou").val();
	var assunto = $("#assunto").val();
	var texto = $("#texto").val();

	$.ajax({
		type: "POST",
		url: "../php/parte02.php",
		dataType: "json",
		data:{
			ajaxQuemEnviou: quemEnviou,
			ajaxAssunto: assunto,
			ajaxTexto: texto
		},
		success: function(retorno){

		}
	})
})

//chama a lista de Emails enviados:
	$("#enviados").click(function(){
		$.ajax({
			type:"POST",
			dataType: "json",
			url:"../php/enviados.php",
			
			success: function(retorno){

				var conteudo = "";
				var c = 0;

				while(c < 13){
					conteudo += "<table>";
					conteudo += "<tr class='linha'>";
					conteudo += "<td class='l0'>" + "<img src = '../imagens/enviado.png' class='img'>" + "</td>";
					conteudo += "<td class='l1'>" + "<b>" + retorno.quemEnviou + "</b>" + "</td>";
					conteudo += "<td class='l1o1'>" + "    " + "</td>";
					conteudo += "<td class='l2'>" + "<b>" + retorno.assunto + "</b>" + "</td>";
					conteudo += "<td class='l1o1'>" + "    " + "</td>";
					conteudo += "<td class='l3s'>" + retorno.texto + "</td>";
					conteudo += "</tr>";

					conteudo += "</table>";

					c++;
				}

				$("#lista").html(conteudo);
			}
		})
	})

})
