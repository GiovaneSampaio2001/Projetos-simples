let Pessoa1={
  Nome:"Gïøvane"
}

let Pessoa2={
  Nome:"Fin"
}

let Pessoa3={
  Nome:"Elliot"
}

// BRINCANDO COM SOBREJIMES

function Sobrenomes(Sobrenome){
  return ` Seja Bem Vindo ${this.Nome} ${Sobrenome}`
}

let Resu=Sobrenomes.apply(Pessoa3,["Brook"])
console.log(Resu)

// BRINCANDO COM O TIME FAVORITO

function TimeFavorito(Time){
  return ` Me Chamo ${this.Nome} Meu Time Favorito É O ${Time}  `
}

let Resu2=TimeFavorito.call(Pessoa1,"Schalke 04")
console.log(Resu2)

// COR FAVORITA 

function SUACORFAVORITA(Cor){
  return ` Minha Cor Favorita É ${Cor} Sou ${this.Nome} `
}
let Resu3=SUACORFAVORITA.apply(Pessoa1,["Laranja"])

console.log(Resu3)

// MINHA IDADE

function MINHAIDADE(ANOATUAL,ANONASCIMENTO){
  return  ` Eu Tenho ${ANONASCIMENTO-ANOATUAL} Anos Sou ${this.Nome} `
}

let Resu4=MINHAIDADE.call(Pessoa1,2001,2022)
console.log(Resu4)

// MEU SEXO 

function MeuSexo(Sexo){
  return ` Olá Me Chamo ${this.Nome} E Me Identifico Com O Sexo ${Sexo} `
}
let Resu5=MeuSexo.call(Pessoa2,"Masculino")
console.log(Resu5)

// Soma(Mais)

function mais(n,nn){
  return ` ${n} + ${nn} ${this.Nome} É Igual A ${n+nn} `
}

let Resu6=mais.apply(Pessoa3,[20,2])
console.log(Resu6)

// SOMA(MENOS)

function Menos(N,NN){
  return ` ${N} - ${NN} ${this.Nome} É Igual A ${N-NN}  `
}
let Resu7=Menos.call(Pessoa1,200,90)
console.log(Resu7)

// DIVISAO

function Dividido(D,DD){
  return ` ${D} ÷ ${DD} ${this.Nome} É Igual A ${D/DD} `
}
let Resu8=Dividido.apply(Pessoa2,[200,100])
console.log(Resu8)

// VEZES

function VEZES(V,VV){
  return ` ${V} X ${VV} ${this.Nome} É Igual A ${V*VV} `
}
let Resu9=VEZES.call(Pessoa1,2,1)
console.log(Resu9)