function DivididoPor15(Valor){
  return Valor / 15
}

function DivididoPor25(Valor){
  return Valor / 25
}

function DivididoPor35(Valor){
  return Valor / 35
}

function DivididoPor45(Valor){
  return Valor / 45
}

function DivididoPor55(Valor){
  return Valor / 55
}

let Numeros=[999,299,199,899,99,29,19,399]
let Resu1=Numeros.map(DivididoPor15)
let Resu2=Numeros.map(DivididoPor25)
let Resu3=Numeros.map(DivididoPor35)
let Resu4=Numeros.map(DivididoPor45)
let Resu5=Numeros.map(DivididoPor55)
console.log(Resu1)
console.log(Resu2)
console.log(Resu3)
console.log(Resu4)
console.log(Resu5)