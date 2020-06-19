																	//Funções Pré-definidas\\

			//Aritméticas

//Declaração\\
var numArredondar = Math.round(5.2);

var numElevado = Math.pow(4,2);

var numRaiz = Math.sqrt(12);

var array = [1, 2, 4, 10, 5, 6];

var numTangente = Math.tan(1000);


//Funções\\
function arredondar(){
	alert(numArredondar);
}

function elevado(){
	alert(numElevado);
}

function raiz(){
	alert(numRaiz);
}

function minArray(){
	var numeroMin = Math.min(...array);
	alert(numeroMin);
}

function maxArray(){
	var numeroMax = Math.max(...array);
	alert(numeroMax);
}

function calcTangente(){
	alert(numTangente);
}



//Manipulação de strings\\

function escreve(){ //Escreve uma string
	var exemplo2 ="12345";
	alert(parseInt(exemplo2));
} 
function returnString(){ //Escreve entre o intervalo
	exemplo3 ="Como estas";
	alert(exemplo3.slice(0, 5)); 
}

function deleteString(){ //Apagar entre um intervalo
	var exemplo1 = "O meu nome e Joao!";
	var newExemplo = exemplo1.substring(6, 17);
	alert(newExemplo);
}

function pos(){ //Numero de caracteres apos da string indicada
	var exemplo8 = "Ola mundo";
	alert(exemplo8.indexOf("mundo"));
}

function concatenar(){ //Juntar
	var exemplo6 ="Como";
	var exemplo7 =" Estas";
	var exemplo8 = exemplo6+exemplo7+"?";
	alert(exemplo8);
}

function comprimento(){ //Quantidade Caracters
	var exemplo4 = "Tudo Bem";
	alert(exemplo4.length);
}

function maiuscula(){ //Maiusculas
	var exemplo9="ok";
	alert(exemplo9.toUpperCase());
}

function minuscula(){ //Minúsculas
	var exemplo10 = "OK";
	alert(exemplo10.toLowerCase());
}

// Gerar valores 

function gerar(){ //Gerar numeros não inteiros
	var numGerado = Math.random();
	alert(numGerado);
}

function gerarInt(){ //Gerar numeros inteiros
	var numGeradoInt = Math.floor((Math.random() * 10) +1);
	alert(numGeradoInt);
}
