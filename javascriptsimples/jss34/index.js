// QUANTO TEM NA MINHA CONTA

function Conta(Valor){
  return ` Olá ${this.Nome} Na Sua Conta Tem ${Valor.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} Reais  `
}

function Bank(Dolars){
  return ` Na Sua Conta Báncaria ${this.Nome} Você Tem ${Dolars.toLocaleString('en',{style:'currency',currency:'USD'})}  Doláres `
}

let PRIMEIRA_PESSOA={
  Nome:"Gïøvane"
}

let SEGUNDA_PESSOA={
  Nome:"Elliot"
}

let TERCEIRA_PESSOA={
  Nome:"Fin"
}

let Resultado=Conta.apply(TERCEIRA_PESSOA,[900])
console.log(Resultado)
let RESULTADO=Bank.apply(PRIMEIRA_PESSOA,[1500])
console.log(RESULTADO)