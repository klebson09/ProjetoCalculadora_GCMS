
var itens = new Array();
var index = 0,k=373,c=100,f=212;
var ca = false;
var co = false;
var g = false;
var c = false;
var parcial=0;
var sinal = true;//Se o antecessor é sinal ou número

/*Geral*/
$(document).ready(function(){

  $("#cal").click(function(event){
    event.preventDefault();
    if(ca){
      $("#Bloco01").hide(1000);
	  ca = false;
	}else{
	  $("#Bloco01").show(1000);
	  ca = true;
	}
  });
  
  $("#con").click(function(event){
    event.preventDefault();
    if(co){
      $("#Bloco02").hide(1000);
	  co = false;
	}else{
	  $("#Bloco02").show(1000);
	  co = true;
	}
  });
  
  $("#gp").click(function(event){
    event.preventDefault();
    if(g){
      $("#Bloco04").hide(1000);
	  g = false;
	}else{
	  $("#Bloco04").show(1000);
	  g = true;
	}
  });
  
   $("#ca").click(function(event){
    event.preventDefault();
    if(c){
      $("#Bloco03").hide(1000);
	  c = false;
	}else{
	  $("#Bloco03").show(1000);
	  c = true;
	}
  });
  
});


/*Conversor de Temperatura*/
function calcularTemp(tipo){

    if(tipo == 1){
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
		 k = (5/9*(parseFloat(n)-32)+273).toFixed(2);
		 
		 document.getElementById("cvisor").value = (5/9*(parseFloat(n)-32)).toFixed(2);
		 c = (5/9*(parseFloat(n)-32)).toFixed(2);
		 alterarWidth();
		 return "";
	  }
    }
	
	if(tipo == 2){
	
	     var n = document.getElementById("temp").value;
		 document.getElementById("cvisor").value = n;
		 c = n;
		 
		 document.getElementById("kvisor").value = parseFloat(n)+273;
		 k = n + 273;
		 
		 document.getElementById("fvisor").value = ((9/5)*parseFloat(n)+32).toFixed(2);
		 f = ((9/5)*parseFloat(n)+32).toFixed(2);
		 alterarWidth();
		 return "";
	}
   alert("Valor Inválido");  
}


/*Calculadora*/
function concatenar(numero){
  Calculadora.visor.value += numero;
}

/*Calculadora*/
function resultTotal(){
  var result = '';
  
  if(sinal){
    for (i = 0; i < itens.length-1; i++){
     result = result + itens[i];
    }
	result = eval(result); 	
	Calculadora.visor.value =eval(result + itens[itens.length-1] + result); 
  }else{
    for (i = 0; i < itens.length; i++){
     result = result + itens[i];
    }
	Calculadora.visor.value = eval(result);
  }
}

/*Calculadora*/
function restart(){
  for (i = 0; i <= index; i++){
    itens.splice(itens.length-1, 1); 
  }
  index=0;  
}

/*Calculadora*/
function removeLast(CE){
  
  if(CE="CE"){
    if(sinal){
	   sinal=false;
	}else{
	   sinal=true;
	}
  }

  Calculadora.visor.value = "";
  itens.splice(itens.length-1, 1);
  index--;
  getItensToString();
}

/*Calculadora*/
function adicionaItem(item) 
{
  if(item == ""){
     return;
  }else{
  
    /*Remove o Sinal para substituir*/
    if((item == "+" || item == "-" || item == "*" || item == "/")  && sinal)
    {
 	  removeLast();	  
    }
	
	/*Remove o Número para substituir*/
	if(item != "+" && item != "-" && item != "*" && item != "/" && sinal == false)
	{
	  removeLast();
	}
	
	if(item == "+" || item == "-" || item == "*" || item == "/")
	{sinal = true;}else{sinal = false;}
     
    itens.push(item);
    Calculadora.visor.value = "";
    getItensToString();
    index++;
  }
}

/*Calculadora*/
function getItensToString()
{
  var result  = '';
  
  for (i = 0; i < itens.length; i++){
     result = result + itens[i] + '\r\n';
  } 
  document.getElementById("campoTexto").innerHTML = result;
}

/*Conversor de Ângulo*/
function arco(){
var c = document.getElementById("pizza");
var largura = c.attributes.getNamedItem("width").value;
var altura = c.attributes.getNamedItem("height").value; 

var ctx = c.getContext("2d");
var angulo = document.getElementById("fatia").value;
var fatia = (angulo*2*Math.PI)/360;

document.getElementById("grauvisor").value = angulo;
document.getElementById("pivisor").value = fatia.toFixed(2);
document.getElementById("gradovisor").value = ((10*angulo)/9).toFixed(2);

ctx.clearRect(0,0,largura,altura);
ctx.beginPath();
ctx.moveTo(largura/2,altura/2);

//arc(x,y,r,start,stop)
ctx.arc(largura/2,altura/2,200,0,fatia);
ctx.lineTo(largura/2,altura/2);
ctx.stroke();
 
ctx.fillStyle ='#293F8A';
ctx.fill();
}

function init(){ 
  $("#Bloco01").hide();
  $("#Bloco02").hide();
  $("#Bloco03").hide();
  $("#Bloco04").hide();

  $("#cal").hide();
  $("#con").hide();
  $("#ca").hide();
  $("#gp").hide();
  $("#t1").slideUp(4500);
  $("#cal").fadeIn(2000);
  $("#con").fadeIn(3000);
  $("#ca").fadeIn(4000);
  $("#gp").fadeIn(4500);
  
  arco();
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



