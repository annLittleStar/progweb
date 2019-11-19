$(document).ready(function(){
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