function Clicou(){
let TXT=document.querySelector("#Txt")
let TRESU=document.querySelector(".Resu")

if(TXT.value.length===0){
  window.alert("ERRO:Campo Vazio")
}
else{
let TRESULTADO=(TXT.value)
TRESU.innerHTML=` O Seu Nome ${TRESULTADO} Com As Letras Separanda Fica Assim &rarr; ${TRESULTADO.split("")}`
}
}


