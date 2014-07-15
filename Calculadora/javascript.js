var itens = new Array();
var index = 0,k=273,c=0,f=32;

function lowTemperature(){
  
  if(c==0){
    alert("Chegou no limite inferior");
  }else{
     k-=1;
     c-=1;
     f-=1.8;
  
  }
  
  document.getElementById("kvisor").value = k;
  document.getElementById("cvisor").value = c;
  document.getElementById("fvisor").value = f.toFixed(2);
  
  alterarWidth();
}

function addTemperature(){
  
  if(c==100){
    alert("Chegou no limite superior");
  }else{
     k+=1;
     c+=1;
     f+=1.8;
  }
  
  document.getElementById("kvisor").value = k;
  document.getElementById("cvisor").value = c;
  document.getElementById("fvisor").value = f.toFixed(2);
  
  alterarWidth();
}

function calcularTemp(){
  var n = document.getElementById("calcular").value;
  var t = document.getElementById("selecionar").value;
   
  if(n>=273 && n<=373 && t=="K"){
     
	 document.getElementById("kvisor").value = n;
	 k = n;
	 
	 document.getElementById("cvisor").value = parseFloat(n) - 273;
	 c = n - 273;
	 
	 document.getElementById("fvisor").value = (((9/5)*(parseFloat(n)-273))+32).toFixed(2);
	 f = (((9/5)*(parseFloat(n)-273))+32).toFixed(2);
	 
	 alterarWidth();
	 return "";
    }
  
  if(n>=0 && n<=100 && t=="C"){
     
	 document.getElementById("cvisor").value = n;
	 c = n;
	 
	 document.getElementById("kvisor").value = parseFloat(n)+273;
	 k = n + 273;
	 
	 document.getElementById("fvisor").value = ((9/5)*parseFloat(n)+32).toFixed(2);
	 f = ((9/5)*parseFloat(n)+32).toFixed(2);
	 alterarWidth();
	 return "";
    }
     
  if(n>=32 && n<=212 && t=="F"){
     
	 document.getElementById("fvisor").value = n;
	 f = n;
	 
	 document.getElementById("kvisor").value = (5/9*(parseFloat(n)-32)+273).toFixed(2);
	 k = (5/9*(n-32)+273).toFixed(2);
	 
	 document.getElementById("cvisor").value = (5/9*(parseFloat(n)-32)).toFixed(2);
	 c = (5/9*(n-32)).toFixed(2);
	 alterarWidth();
     return "";
  }
   alert("Valor Inválido");  
}

function alterarWidth(){
   document.getElementById("kimg").width= k;
   document.getElementById("cimg").width= c;
   document.getElementById("fimg").width= f;
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

function restart(){
  for (i = 0; i <= index; i++){
    itens.splice(itens.length-1, 1); 
  }
  index=0;  
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
  
  document.getElementById("kvisor").value = k;
  document.getElementById("cvisor").value = c;
  document.getElementById("fvisor").value = f;
}
onload = init;
