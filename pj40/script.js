function Verificou(){
let Name=document.querySelector("#name")
let AnoAt=document.querySelector("#Anoa")
let AnoNc=document.querySelector("#Anon")
let Resu=document.querySelector(".Resultado")

if(Name.value.length===0 || AnoAt.value.length===0 || AnoNc.value.length===0){
  window.alert("ERRO:Informe As Informações")
}
else{
let ANO_NASCIMENTO=Number(AnoNc.value)
let ANO_ATUAL=Number(AnoAt.value)
let NOME=(Name.value)
for(let Anos=ANO_ATUAL;Anos>=ANO_NASCIMENTO;Anos--){
Resu.innerHTML+= ` Em ${Anos} ${NOME} Você Vai Ter ${Anos-ANO_NASCIMENTO} Anos De Idade <br> `
}

}


}

