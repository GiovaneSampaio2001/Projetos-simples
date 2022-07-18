
let Numero=0

function Aumentou(){
let Resu=document.getElementById("Resu")
Numero=Numero + 1 
if(Numero%2===0){
  Resu.innerHTML=` O <br> Número <br> ${Numero} <br> É <br> Par`
}
else{
  Resu.innerHTML=` O <br> Número <br> ${Numero} <br> É <br>  Impar`
}
}