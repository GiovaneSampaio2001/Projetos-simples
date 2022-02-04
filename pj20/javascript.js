function Repetido(){
  var Name=document.querySelector("#nom")
  var nuum=document.querySelector("#num")
  var Rst=document.querySelector(".res")
  if(Name.value.length==0 || nuum.value.length==0){
    window.alert("Os Dados Estão Vazios Prenchaos")
  }
  else{
    var Numero=Number(nuum.value)
    var Nome=(Name.value)
    Rst.innerHTML=""
    Rst.innerHTML+="Começou Repetição<br>"
    for(var i=1; i<=Numero;i++){
      Rst.innerHTML+=` O Nome ${Nome} Foi Repetido ${i} Vezes <br>`
    }
    
  }Rst.innerHTML+="Fim Da Repetição"
}

function Fundo1(){
  document.body.style.color="white"
  document.body.style.background="black"
}

function Fundo2(){
  document.body.style.color="white"
  document.body.style.background="blue"
}

function Fundo3(){
  document.body.style.background="orange"
  document.body.style.color="black"
}