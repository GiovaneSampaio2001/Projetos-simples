function MeuId(Id){
return ` O Seu Id ${this.Nome} É ${Id}  `
}

let Pessoa1={
  Nome:"Gïøvane"
}

let Pessoa2={
  Nome:"Fin"
}

let Pessoa3={
  Nome:"Elliot"
}

let Pessoa4={
  Nome:"Shanelle"
}

let Pessoa5={
  Nome:"Frances"
}

let Resu1=MeuId.call(Pessoa1,"Gïø")
let Resu2=MeuId.call(Pessoa2,"Filly")
let Resu3=MeuId.call(Pessoa3,"Elli")
let Resu4=MeuId.call(Pessoa4,"Shane")
let Resu5=MeuId.call(Pessoa5,"Fran")

console.log(Resu1)
console.log(Resu2)
console.log(Resu3)
console.log(Resu4)
console.log(Resu5)