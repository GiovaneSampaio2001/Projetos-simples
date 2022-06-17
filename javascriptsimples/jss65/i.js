function Criou(Rede){
  return ` O ${this.Nome} Criou O ${Rede}`
}


let Pessoa1={
  Nome:"Giøvane"
}

let Pessoa2={
  Nome:"Fin"
}

let Pessoa3={
  Nome:"Elliot"
}

let Resultado1=Criou.call(Pessoa1,"FACEBOOK")
let Resultado2=Criou.call(Pessoa2,"INSTRAGAM")
let Resultado3=Criou.call(Pessoa3,"TWITER")

console.log(Resultado1)
console.log(Resultado2)
console.log(Resultado3)