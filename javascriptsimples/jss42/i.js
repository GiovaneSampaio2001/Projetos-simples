// MINHA Profissao

function Profissao(Pro){
return ` Ola Me Chamo ${this.Nome} Sou Um ${Pro} `
}

let Name1={
  Nome:"Gïøvane"
}

let Name2={
  Nome:"Elliot"
}

let Name3={
  Nome:"Fin"
}

let Name4={
  Nome:"Caio"
}

let Name5={
  Nome:"Juice Wrld "
}

let Resultado1=Profissao.apply(Name1,["Advogado"])

let Resultado2=Profissao.apply(Name2,["Jogador De Futebol"])

let Resultao3=Profissao.apply(Name3,["Jogador De Basquete"])

let Resultado4=Profissao.apply(Name4,["Programador"])

let Resultado5=Profissao.apply(Name5,["Cantor"])

console.log(Resultado1)
console.log(Resultado2)
console.log(Resultao3)
console.log(Resultado4)
console.log(Resultado5)