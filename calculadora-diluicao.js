var botaoCalcular = document.getElementById("botao-calcular");
var perguntas = document.getElementsByClassName("perguntas");
var resultado = document.getElementsByClassName("resultado");
var sobreCalculo = document.getElementsByClassName("sobre-calculo");
var numeroGotaInterno = document.getElementById("numero-gota-interno"); 
var resultadoFinal = document.getElementById("resultado-final");

var input_MlOleoVegetal = document.getElementById("ml-oleo-vegetal-usuario");
var input_PorctOleoEssencial = document.getElementById("porct-oleo-essencial-usuario");

function formatarNumero(input){ return input.value.replace(",", ".") }
function ehNumero(input){ return isNaN(Number(formatarNumero(input))) ? false : true; }
function novoCalculo(){ location.reload() }
function mostrarSobreCalculo(){
	perguntas[0].style.display = "none";
	sobreCalculo[0].style.display = "block";
}


botaoCalcular.addEventListener("click", function(){

	if ((input_MlOleoVegetal.value != "") && (input_PorctOleoEssencial.value != "")) {

		if ((ehNumero(input_MlOleoVegetal) == true) && (ehNumero(input_PorctOleoEssencial)) == true) {
			
			var mlOleoVegetal = formatarNumero(input_MlOleoVegetal);
			var porctOleoEssencial = formatarNumero(input_PorctOleoEssencial);
			
			var qtdGotas = parseFloat((mlOleoVegetal * porctOleoEssencial * 0.25)).toFixed(1);
			var qtdGotasArredondada = Math.round(qtdGotas);

			perguntas[0].style.display = "none";
			resultado[0].style.display = "block";

			numeroGotaInterno.innerHTML = qtdGotasArredondada;

			resultadoFinal.innerHTML = "Para uma concentração de <b>" 
			+ porctOleoEssencial 
			+ "%</b><br> em <b>" 
			+ mlOleoVegetal 
			+ "ml</b> de óleo vegetal, <br> você deve diluir <b>" 
			+ qtdGotas + " gota(s)</b> <i>(valor sem arredondamento)</i> do óleo essencial em seu frasco!"

			
		
		} else { alert("São aceitos apenas números! Verifique o que foi digitado.") }

	} else { alert("Você precisa preencher os dois campos!") }
}) 






