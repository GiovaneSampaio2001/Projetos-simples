// PROGRAMA PARA SABER SER VOCÊ É MAIOR OU MENOR DE IDADE 
let Primeira_Pessoa={
  Nome:"Gïøvane",
  Idade:21
}

let Segunda_Pessoa={
  Nome:"Robot",
  Idade:20
}

let Terceira_Pessoa={
  Nome:"Fin",
  Idade:15
}

let Quarta_Pessoa={
  Nome:"Hello World",
  Idade:5
}

function  MAIOR_OU_MENOR(){
  if(this.Idade>=18){
    return ` Você É Maior De Idade ${this.Nome} É Você Tem ${this.Idade} Anos `
  }
  return ` Você É Menor De Idade ${this.Nome} É Você Tem ${this.Idade} Anos `
}

console.log(MAIOR_OU_MENOR.call(Quarta_Pessoa))