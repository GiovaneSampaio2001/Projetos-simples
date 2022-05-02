function Programacao(Linguagem){
  return ` Me Chamo ${this.Nome} Minha Linguagem De Programaçao Favorita É ${Linguagem}  `
}

let People1={
  Nome:"Gïøvane"
}

let People2={
  Nome:"Elliot"
}

let People3={
  Nome:"Fin"
}

let People4={
  Nome:"Robot"
}

let People5={
  Nome:"Shanelle"
}

let Resultado_Do_Programa=Programacao.apply(People1,["JavaScript"])
console.log(Resultado_Do_Programa)