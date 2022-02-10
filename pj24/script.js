function Clicou(){
var res=document.getElementsByTagName('p')[0]
var cor1=document.querySelector(".pr1")
var cor2=document.querySelector(".pr2")
var cor3=document.querySelector(".pr3")

res.innerHTML= " CORES SECUNDÁRIAS"
cor1.style.background="green"
cor2.style.background="orange"
cor3.style.background="purple"

}

function Apertou(){
var r=document.getElementsByTagName("p")[0]
var cor4=document.querySelector(".pr1")
var cor5=document.querySelector(".pr2")
var cor6=document.querySelector(".pr3")

r.innerHTML= "CORES PRIMÁRIAS"
cor4.style.background="blue"
cor5.style.background="yellow"
cor6.style.background="red"

}