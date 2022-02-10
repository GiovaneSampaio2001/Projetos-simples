var nmr=document.querySelector("#tnu")
var res=document.querySelector("#nu")
var valores = []
var rd=document.querySelector(".rss")


function num(n){
  if(Number(n) >=1  && Number(n) <=100){
    return true
  }
  else{
    return false
  }
}

function lis(n,l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }
  else{
      return false
  }
}


function Adicionou(){ 
 
  if(num(nmr.value) && !lis(nmr.value,valores)){
var resu=document.createElement("option")
    valores.push(Number(nmr.value))
    resu.text=` Número Adicionado ${nmr.value}`
    res.appendChild(resu)
    
    
  }
  else{
    window.alert("Números Invalido Ou Ja Encontrado")
  }
    nmr.focus()
}

function finalizar(){
  if(valores.length==0){
    window.alert("Prencha Os Número Antes De Finalizar")
  }
  else{
    var maior=valores[0]
    var menor=valores[0]
    let soma=0
    for(let pos in valores){
      soma+=valores[pos]
      if(valores[pos] > maior)
      maior=valores[pos]
      if(valores[pos]< menor)
      menor=valores[pos]
    }
    var r=valores.length
    rd.innerHTML+= ` Foi Adionado  ${r} Números <br>`
    rd.innerHTML+=` O Maior Número Informado Foí ${maior} <br>`
    rd.innerHTML+=`O Menor Número Informado Foí ${menor} <br>`
    rd.innerHTML+= ` Somando Todos Os Valores, Temos ${soma} <br>`
  }
  
}