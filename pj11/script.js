function Somar1(){
var Num1=document.getElementById("Tnum1")
var Num2=document.getElementById("Tnum2")
var Esc=document.getElementsByTagName("p")[0]
var Som1=Number(Num1.value)
var Som2=Number(Num2.value)
var Soma=Som1+Som2
Esc.innerText=`A Soma Entre ${Som1} Mais ${Som2} É Igual A ${Soma}`
}


function Somar2(){
  var M1=document.getElementById("Mn1")
  var M2=document.getElementById("Mn2")
  var Escr=document.getElementsByTagName("p")[1]
  var Men1=Number(M1.value)
  var Men2=Number(M2.value)
  var Soma=Men1-Men2
  Escr.innerText=`A Soma Entre ${Men1} - ${Men2} É Igual A ${Soma}`
}

function Somar3(){
var Vz1=document.getElementById("Mul1")
var Vz2=document.getElementById("Mul2")
var Escre=document.getElementsByTagName("p")[2]
var Vezes1=Number(Vz1.value)
var Vezes2=Number(Vz2.value)
var Soma=Vezes1*Vezes2
Escre.innerText=`A Soma Entre ${Vezes1} Vezes ${Vezes2} É Igual A ${Soma}`
}


function Somar4(){
var D1=document.getElementById("Div1")
var D2=document.getElementById("Div2")
var Escreve=document.getElementsByTagName("p")[3]
var Dv1=Number(D1.value)
var Dv2=Number(D2.value)
var Soma=Dv1/Dv2
Escreve.innerText=`A Soma Entre ${Dv1} Dividido Por ${Dv2} É Igual A ${Soma}`
}
