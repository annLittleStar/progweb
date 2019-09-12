var json = [{origem: "ana.schran@pucpr.edu.br", destinatario: "gabriel.barboza@pucpr.edu.br"}];
[{origem: "anaschran28@gmail.com", destinatario: "gabriel.ernesto2001@gmail.com"}];

$(document).ready(function(){
	localMontaEmail();
})

function localMontaEmail(){
	var html = "";

	for(var i = 0; i < json.length; i++){
		html = "";

		html += "<tr>";
		html += "<td>" + json[i].origem + "</td>";
		html += "<td>" + json[i].destinatario + "</td>";
		html += "</tr>";

		$("caixaDeEntrada").append(html);
	}
}
