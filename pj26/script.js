function Clicou(){
  let Week=document.querySelector("#txtweek")
  let Resu=document.querySelector(".res")
  if(Week.value.length===0){
    window.alert("O Campo Esta Vazio Prenchao")
  }else{
    let Semana=(Week.value)
    if(Semana === "Segunda Feira" || Semana === "segunda feira" || Semana=== "Segunda" || Semana === "segunda"){
      Resu.innerHTML= ` Hojê É ${Semana} Portanto Estamos Na Semana `
    }
    else if(Semana === "Terça Feira" || Semana === "terça feira" || Semana === "terça" === "Terça"){
      Resu.innerHTML= ` Hojê É ${Semana} Portanto Estamos Na Semana `
    }
    else if(Semana === "Quarta Feira" || Semana === "quarta feira" || Semana === "Quarta" || Semana === "quarta"){
      Resu.innerHTML=` Hojê É ${Semana} Portanto Estamos Na Semana`
    }
    else if(Semana === "Quinta Feira" || Semana === "quinta feira" || Semana === "quinta"  || Semana === "Quinta"){
      Resu.innerHTML=` Hojê É ${Semana} Portanto Estamos Na Semana`
    }
    else if(Semana === "Sexta Feira" || Semana === "sexta feira" || Semana === "sexta" || Semana === "Sexta"){
      Resu.innerHTML=` Hojê É ${Semana} Portanto Estamos Na Semana  `
    }
    else if(Semana === "Sâbado" || Semana === "sâbado") {
      Resu.innerHTML=` Hojê É ${Semana} Portanto Estamos No Fim De Semana`
    }
    else if(Semana === "Domingo" || Semana === "domingo"){
      Resu.innerHTML=` Hojê É ${Semana} Portanto Estamos No Fim De Semana`
    }
    else {
      Resu.innerHTML=` Verifique Ser Voce Informou O Dia Da Semana Corretamente`
    }
  }
}

 function Clicou2(){
  let num=document.querySelector("#tnum")
  let Rse=document.querySelector(".rnum")
  if(num.value.length === 0){
    window.alert("Campo Vazio Prencha Com Um Número")
  }
  else{
    let Valores=Number(num.value)
    if(Valores >=0){
      Rse.innerHTML= ` O Número Informado Foi ${Valores}  Portanto E Positivo`
      Rse.style.color="blue"
    }
    else{
      Rse.innerHTML= ` O Número Informado Foi ${Valores} Portanto E Negativo `
      Rse.style.color="red"
    }
  }
}


function Click3(){
let Name=document.querySelector("#tname")
let Rs=document.querySelector(".saida")
if(Name.value.length===0){
  window.alert(` Campo Vazio Prenchao Com Seu Nome`)
}
else{
let Nomes=(Name.value)

if(Nomes === Nomes.toUpperCase()){
Rs.innerHTML=` Olá ${Nomes} Seu Nome Está Em Maiúsculo`
}
else if(Nomes === Nomes.toLowerCase()){
Rs.innerHTML=` Olá ${Nomes} Seu Nome Está Em Minúsculo`
}
else{
  Rs.innerHTML=` Olá ${Nomes} Seu Nome  Está Com Letras Em  Minúsculo É  Maiúsculo`
}
}
}

function Click4(){
  let Nomes=document.querySelector("#nome")
  if(Nomes.value.length === 0){
    window.alert("Erro Campo Vazio Prencha")
  }
  else{
    let Names=(Nomes.value)
    let Rst=document.querySelector(".write")
    Rst.innerHTML=` Olá ${Names} Seu Nome Tem ${Names.length} Letras`
  }
}

