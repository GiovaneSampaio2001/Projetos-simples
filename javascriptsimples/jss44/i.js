// EM QUEE VOCÊ ESTA PENSADO


function QualCorEstaPensado(Cor){
  return ` ${this.Nome} Em Quer Cor Você Esta Pensado ? Eu Estou Pensado Na Cor ${Cor}  `
}

function QualPaisEstaPensadoEmViajar(Pais){
return ` Olá ${this.Nome} Em Que Pais Você Está Pensado Em Viajar ? Eu Estou Pensado Em Viajar Para O ${Pais}`
}

function QualShowVoceVai(Cantor){
return ` Em Que Show ${this.Nome} Você Esta Pensado Em Ir ? Eu Estou Pendado Em Ir No Show Do  ${Cantor} `
}

function QualConsoleVaiCompra(Console){
return ` O ${this.Nome} Qual Video Game Você Esta Pensado Compra ? Eu Vou Compra Um ${Console} `
}

let Pessoa1={
  Nome:"Gïøvane"
}

let Pessoa2={
  Nome:"Fin"
}

let Pessoa3={
  Nome:"Shanelle"
}

let Pessoa4={
  Nome:"Sandra"
}

let Resultado1=QualCorEstaPensado.call(Pessoa4,"Azul")
let Resultado2=QualPaisEstaPensadoEmViajar.call(Pessoa3,"Estados Unidos")
let Resultado3=QualShowVoceVai.call(Pessoa2,"Juice Wrld")
let Resultado4=QualConsoleVaiCompra.call(Pessoa1,"Nintendo Switch")

console.log(` ${Resultado1} `)
console.log(` ${Resultado2}`)
console.log(` ${Resultado3} `)
console.log(` ${Resultado4} `)