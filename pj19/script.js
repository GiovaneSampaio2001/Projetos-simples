function Soma1(){
  
var Nu=document.getElementById("txtab")
var resultado=document.querySelector("#tab1")
if(Nu.value.length==0){
  window.alert("Campo Vazio Informe Um Número")
}

else{
  var Numero=Number(Nu.value)
  var Rst=document.createElement("option")
  resultado.innerHTML=""
  for(var i=0;i<=100;i++){
    resultado.innerHTML+=` ${Numero} X ${i}=${Numero*i} <br>`
    
  }
}
  
}


function Soma2(){
  var Num=document.getElementById("txtab2")
  var Re=document.querySelector(".res")
  if(Num.value.length==0){
    window.alert("Campo Vazio Informe Um Número")
  }
  else{
    var Tabu=Number(Num.value)
    Re.innerHTML=""
    for(var i=0;i<=100;i++){
      Re.innerHTML+=`${Tabu} + ${i} =${Tabu +i}<br>`
    }
  }
}

function Soma3(){

var num=document.getElementById("txtab3")
var Rst=document.querySelector(".res1")

if(num.value.length==0){
  window.alert("Campo Vazio Informe Um Número")
}
else{
  var nmb=Number(num.value)
  Rst.innerHTML=""
  for(var i=0;i<=100;i++){
    Rst.innerHTML+=`${nmb} - ${i} = ${nmb-i}<br>`
  }
}

  
}

function Soma4(){
var Nmr=document.querySelector("#txtab4")
var Rss=document.querySelector(".r")

if(Nmr.value.length==0){
  window.alert("Campo Vazio Informe Um Número")
}
else{
  var nud=Number(Nmr.value)
  Rss.innerHTML=""
  for(var i=0;i<=100;i++){
    Rss.innerHTML+=`${nud} ÷ ${i} = ${nud/i}<br>`
  }
}
}