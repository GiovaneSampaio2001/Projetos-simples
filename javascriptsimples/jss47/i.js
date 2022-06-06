function QuemEVoce(){
return ` Qual É Seu Nome ? ${this.Nome} , Qual É Seu Sobrenome ? ${this.Sobrenome} , Qual É Sua Idade ? ${this.Idade} Anos `
}

let Pessoa1={
  Nome:"Gïøvane",
  Sobrenome:"Campos",
  Idade:21
}

let Pessoa2={
  Nome:"Elliot",
  Sobrenome:"Brooks",
  Idade:20
}

let Pessoa3={
  Nome:"Fin",
  Sobrenome:"Andrade",
  Idade:19
}

let Pessoa4={
  Nome:"Shanelle",
  Sobrenome:"Gribbin",
  Idade:15
}

let Pessoa5={
  Nome:"Frances",
  Sobrenome:"Coultas",
  Idade:19,
}

let Resultado=QuemEVoce.call(Pessoa3)
console.log(Resultado)