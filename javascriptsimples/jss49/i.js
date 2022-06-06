function Terra(Peoples){
  return ` Bem Vindo A Terra ${Peoples} `
}


function Lua(Peoples){
  return ` Bem Vindo A Lua ${Peoples} `
}

function Espaco(Peoples){
  return ` Bem Vindo Ao Espaço ${Peoples} `
}

function Marte(Peoples){
  return ` Bem Vindo A Marte ${Peoples} `
}

let Pessoas=["Gïøvane","Fin","Elliot","Brooks","David","Shanelle","Frances","Connie","Megan","Izzy"]

let Resultado1=Pessoas.map(Terra)
let Resultado2=Pessoas.map(Marte)
let Resultado3=Pessoas.map(Espaco)
let Resultado4=Pessoas.map(Lua)

console.log(Resultado1)
console.log(Resultado2)
console.log(Resultado3)
console.log(Resultado4)