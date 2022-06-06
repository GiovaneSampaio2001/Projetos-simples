// MEU GATO
function MeuGato(){
  return ` Meu Gato Se Chamar ${this.Nome} Ele Tem ${this.Idade} Anos  O Sexo É ${this.Sexo}`
}

let Gato1={
  Nome:"Jack",
  Idade:2,
  Sexo:"Masculino"
}

let Gato2={
  Nome:"Chitanda",
  Idade:3,
  Sexo:"Femenino"
}

let Gato3={
  Nome:"Mia",
  Idade:1,
  Sexo:"Femenino"
}

let Gato4={
  Nome:"Eren",
  Idade:2,
  Sexo:"Masculino"
}

let Gato5={
  Nome:"Ravena",
  Idade:4,
  Sexo:"Femenino"
}

let Resu=MeuGato.call(Gato3)
console.log(Resu)