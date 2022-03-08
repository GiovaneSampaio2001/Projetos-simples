function Verificou(){
let letras=document.querySelector("#tletra")
let Res=document.querySelector(".Saida")
if(letras.value.length==0){
  Res.innerHTML= " ERRO CAMPO VAZIO PRENCHAO COM UMA LETRA"
  Res.style.color="red"
}
else{
  let LETRAS=(letras.value)
  Res.innerHTML=""
  switch(LETRAS){
  case "A":
 Res.innerHTML= ` A Letra ${LETRAS}  Está Em Maiúsculo`
  break
  case "a":
 Res.innerHTML=` A Letra ${LETRAS} Está Em Minúsculo`
  break
  case "B":
  Res.innerHTML=` A Letra ${LETRAS} Está Em Maiúsculo `
   break
   case "b":
  Res.innerHTML=` A Letra ${LETRAS} Está Em Minúsculo`
  break
  case "C":
  Res.innerHTML=` A Letra ${LETRAS} Está Em Maiúsculo`
    break
  case "c":
  Res.innerHTML=` A Letra ${LETRAS} Está Em Minúsculo`
   break
  case "D":
  Res.innerHTML= ` A Letra ${LETRAS} Está Em Maiúsculo`
  break
  case "d":
Res.innerHTML=` A Letra ${LETRAS} Está Em Minúsculo`
 break
 case "E":
   Res.innerHTML=` A Letra ${LETRAS} Está Em Maiúsculo`
   break
  case "e":
  Res.innerHTML=` A Letra ${LETRAS} Está Em Minúsculo `
  break
  case "F":
  Res.innerHTML=` A Letra ${LETRAS} Está Em Maiúsculo `
  break
  case "f":
    Res.innerHTML=` A Letra ${LETRAS} Está Em Minúsculo`
    break
  case "G":
    Res.innerHTML=` A Letra ${LETRAS} Está Em Maiúsculo`
    break
  case "g":
    Res.innerHTML=` A Letra ${LETRAS} Está  Em Minúsculo `
    break
    case "H":
    Res.innerHTML=` A Letra ${LETRAS}  Está Em Maiúsculo`
    break
    case "h":
    Res.innerHTML=` A Letra ${LETRAS} Está Em Minúsculo`
    break
    case "I":
    Res.innerHTML=` A Letra ${LETRAS} 
    Está Em Maiúsculo `
    break
    case "i":
    Res.innerHTML=` A Letra ${LETRAS} 
    Está Em Minúsculo`
    break
    case "J":
    Res.innerHTML=` A Letra ${LETRAS}  Está Em Maiúsculo`
    break
    case "j":
    Res.innerHTML=`  A Letra ${LETRAS} Está Em Minúsculo `
    break
    case "K":
    Res.innerHTML=` A Letra ${LETRAS} 
    Está Em  Maiúsculo`
    break
    case "k":
    Res.innerHTML=` A Letra ${LETRAS} Está Em Minúsculo`
    break
    case "L":
    Res.innerHTML=` A Letra ${LETRAS} Está Em Maiúsculo `
    break
    case "l":
    Res.innerHTML=` A Letra ${LETRAS} Está Em  Minúsculo `
    break
    case "M":
    Res.innerHTML=` A Letra ${LETRAS} Está Em Maiúsculo` 
    break
    case "m":
    Res.innerHTML=` A Letra ${LETRAS} Está Em  Minúsculo`
    break
    case "N":
    Res.innerHTML=` A Letra ${LETRAS} Está Em Maiúsculo `
    break
    case "n":
    Res.innerHTML=` A Letra ${LETRAS}  Está Em  Minúsculo` 
    break
    case "O":
    Res.innerHTML=` A Letra ${LETRAS}  Está Em Maiúsculo`
    break
    case "o":
    Res.innerHTML=` A Letra ${LETRAS} 
    Está Em  Minúsculo`
    break
    case "P":
    Res.innerHTML=` A Letra ${LETRAS} Está Em Maiúsculo `
    break
    case "p":
    Res.innerHTML=` A Letra ${LETRAS} Está Em  Minúsculo `
    break
    case "Q":
    Res.innerHTML=` A Letra ${LETRAS} Está Em Maiúsculo `
    break
    case "q":
    Res.innerHTML=` A Letra ${LETRAS}
    Está Em  Minúsculo`
    break
    case "R":
    Res.innerHTML=` A Letra ${LETRAS} 
    Está Em Maiúsculo`
    break
    case "r":
    Res.innerHTML=` A Letra ${LETRAS} Está Em  Minúsculo`
    break
    case "S":
    Res.innerHTML=` A Letra ${LETRAS} Está Em Maiúsculo`
    break
    case "s":
    Res.innerHTML=` A Letra ${LETRAS} 
    Está Em  Minúsculo`
    break
    case "T":
    Res.innerHTML=` A Letra ${LETRAS} Está Em Maiúsculo`
    break
    case "t":
    Res.innerHTML=` A Letra ${LETRAS} Está Em  Minúsculo `
    break
    case "U":
    Res.innerHTML=` A Letra ${LETRAS} Está Em Maiúsculo`
    break
    case "u":
      Res.innerHTML=` A Letra ${LETRAS}
      Está Em  Minúsculo `
      break
    case "V":
    Res.innerHTML=` A Letra ${LETRAS} Está Em Maiúsculo`
    break
    case "v":
    Res.innerHTML=` A Letra ${LETRAS} Está Em  Minúsculo `
    break
    case "W":
    Res.innerHTML=` A Letra ${LETRAS} Está Em Maiúsculo`
    break
    case "w":
    Res.innerHTML=` A Letra ${LETRAS} Está Em  Minúsculo `
    break
    case "X":
    Res.innerHTML=` A Letra ${LETRAS}
    Está Em Maiúsculo`
    break
    case "x":
    Res.innerHTML=` A Letra ${LETRAS}  
    Está Em  Minúsculo`
    break
    case "Y":
    Res.innerHTML=` A Letra ${LETRAS} Está Em Maiúsculo `
    break
    case "y":
    Res.innerHTML=` A Letra ${LETRAS} Está Em  Minúsculo`
    break
    case "Z":
    Res.innerHTML=` A Letra ${LETRAS} Está Em Maiúsculo `
    break
    case "z":
    Res.innerHTML=` A Letra ${LETRAS} Está Em Minúsculo`
    break
    default:
    Res.innerHTML=` ERRO ISTO NÃO É UMA LETRA , O QUE VOCÊ INFORMOU DEVER SER UMA PALAVRA OU UM NÚMERO  `
    Res.style.color="red"
}
}
}



