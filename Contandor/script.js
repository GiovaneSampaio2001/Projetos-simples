var Numero=document.querySelector(".Valor")

var Num=0



function Mais(){
Num=Num + 1
Numero.innerHTML=` ${Num} `
if(Num>=10){
  Numero.style.color="blue"
}
else if(Num<0){
  Numero.style.color="red"
}
else{
  Numero.style.color="black"
}
}

function Menos(){
Num=Num-1
Numero.innerHTML=`${Num}`

if(Num<0){
Numero.style.color="red"
}
else if(Num>=0){
  Numero.style.color="black"
}
}