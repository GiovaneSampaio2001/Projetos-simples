var Numeros=0


function Aumentou(){
Numeros=Numeros+1
let Resu=document.getElementById("Resu")
Resu.innerText=` O Número  ${Numeros} É Positivo`
Resu.style.color="Blue"
}

function Abaixou(){
Numeros=Numeros - 1 
let Rsu=document.getElementById("Resu")
if(Numeros<0){
  Rsu.innerText=` O Número ${Numeros} E Negatvo `
  Rsu.style.color="red"
}
else if(Numero>0){
  Rsu.style.color="blue"
}
}