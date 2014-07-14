var itens = new Array();
var index = 0,k=273,c=0,f=32;

function lowTemperature(){
  
  if(c==0){
    alert("Chegou no limite inferior");
  }else{
     k-=1;
     c-=1;
     f-=1.8;
  
     document.getElementById("kimg").width= k;
     document.getElementById("cimg").width= c;
     document.getElementById("fimg").width= f;
  }
}

function addTemperature(){
  
  if(c==100){
    alert("Chegou no limite superior");
  }else{
     k+=1;
     c+=1;
     f+=1.8;
  
     document.getElementById("kimg").width= k;
     document.getElementById("cimg").width= c;
     document.getElementById("fimg").width= f;
  }
}


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


function init(){ 
  Calculadora.visor.value = "";
  document.getElementById("kimg").height="10";
  document.getElementById("kimg").width=k;
  document.getElementById("cimg").height="10";
  document.getElementById("cimg").width=c;
  document.getElementById("fimg").height="10";
  document.getElementById("fimg").width=f;
}
onload = init;
