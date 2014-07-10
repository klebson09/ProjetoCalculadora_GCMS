var itens = new Array();
var index = 0;

function concatenar(numero){
  Calculadora.visor.value += numero;
}

function resultTotal(){
  var result = '';
  
  for (i = 0; i < itens.length; i++){
     result = result + itens[i];
  }
  
  Calculadora.visor.value = eval(result);
}

function removeLast(){
  Calculadora.visor.value = "";
  itens.splice(itens.length-1, 1);
  index--;
  getItensToString();
}

function adicionaItem(item) 
{
  if(item == ""){item=0;}
  itens.push(item);
  Calculadora.visor.value = "";
  getItensToString();
  index++;
}

function getItensToString()
{
  var result  = '';
  
  for (i = 0; i < itens.length; i++){
     result = result + itens[i] + '\r\n';
  } 
  document.getElementById("campoTexto").innerHTML = result;
}


function init() {
  Calculadora.visor.value = '';
}
onload = init;