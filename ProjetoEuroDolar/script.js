var REAL=0 

function ClickReal(){
REAL= REAL + 1
let RUM=document.getElementById("ResuUm")
RUM.innerHTML=` ${REAL.toLocaleString(`pt-BR`,{style:'currency',currency:'BRL'})} `
RUM.style.color="green"
}

var Dolar=0 

function ClickDolar(){
Dolar= Dolar + 1
let RONE=document.getElementById("ResuOne")
RONE.innerHTML=` ${Dolar.toLocaleString(`en`,{style:'currency',currency:'USD'})} ` 
RONE.style.color="green"
}