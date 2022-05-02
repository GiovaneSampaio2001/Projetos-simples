// QUANTOS ANOS VOCÊ TERA TANTO ANOS
let Primeira_Pessoa={
  Nome:"Gïøvane",
  Idade:21,
  Ano_Nascimento:2001,
}

let Segunda_Pessoa={
  Nome:"Robot",
  Idade:20,
  Ano_Nascimento:2000,
}

let Terceira_Pessoa={
  Nome:"Shanelle",
  Idade:18,
  Ano_Nascimento:2004,
}

function Futuro(Valor){
  return ` Olá ${this.Nome} Daqui ${Valor} Anos Você ${Valor+this.Idade} Anos`
}

console.log(Futuro.call(Segunda_Pessoa,2010))

// Em Tal Ano Você Tera Tal Anos

function Ano_No_Futuro(Ano){
  return ` ${this.Nome}  Em ${Ano} Você Terá ${Ano-this.Ano_Nascimento} Anos  `
}

console.log(Ano_No_Futuro.apply(Segunda_Pessoa,[2010]))