function Tabuada(){
var Nt=document.getElementById("tab")
var Tabu=document.querySelector(".res")
  
  if(Nt.value.length==0){
    window.alert("Prenchao O Campo Com Um Número ")
  }
  else{
var Tabuada=Number(Nt.value)
Tabu.innerHTML=""
Tabu.innerHTML+=`Tabuada Do ${Tabuada}`
for(var i=0;i<=100;i++){
  Tabu.innerHTML+=` <br> ${Tabuada}X${i}=${Tabuada*i}`
  
}
  }
}