function Clicou(){
let Resu1=document.querySelector("#Tname")
let RESU=document.querySelector("#Saida")
if(Resu1.value.length==0){
  window.alert(" POR FAVOR IDIOTA INFORME SEU NOME")
}
else{
let RESULTADO=(Resu1.value)
RESU.innerHTML+=` Hello World &rarr; ${RESULTADO} <br> `
}
}

window.setInterval(Clicou,2000) 