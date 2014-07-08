var itens = new Array();
var index = 0;

function concatenar(numero){
  Calculadora.visor.value += numero;
}

function result(){
 Calculadora.visor.value = eval(Calculadora.visor.value);
}

function adicionaItem(item) 
{
  itens[index] = {nomeItem : item};
  index++;
}

function concluirCompra() 
{           
  document.getElementByName("campoTexto").innerHTML=getItensToString();
}

function getItensToString()
{
  var result  = '';
  alert(itens);  

  for (i = 0; i < itens.length; i++){
     result = result + itens[i]['nomeItem'] + '\r\n';
  }
  return result;
}


function init() {
  //var form = document.forms[0];
  Calculadora.visor.value = '';
}
onload = init;
