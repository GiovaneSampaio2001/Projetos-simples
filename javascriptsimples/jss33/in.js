// LETRAS E NÚMEROS QUE EU MAIS GOSTO

function MinhaLetraFavorita(Letra){
  return ` Essa É Minha Minha Letra Favorita ${Letra} `
}

function MeuNumerosFavoritos(Numeros){
  return ` Esse É Meu Número Favorito ${Numeros} `
}

let Letras=["A","B","C"]
let Numeros=[120,999,20]

let Resu=Letras.map(MinhaLetraFavorita)
let RESU=Numeros.map(MeuNumerosFavoritos)
console.log(Resu)
console.log(RESU)

// LETRAS E NÚMEROS QUE EU MENOS GOSTOU

function LetraQueNaoGosto(letras){
  return ` Este E A Letra Que Eu Menos Gosto ${letras} `
}

function NumerosQueMenosGosto(numeros){
  return ` Este É O Número Que Eu Mais Odeio ${numeros} `
}

let letras=["Z","X","Y"]
let NUMEROS=[7,22,0]
let Rsu=letras.map(LetraQueNaoGosto)
let RSU=NUMEROS.map(NumerosQueMenosGosto)

console.log(Rsu)
console.log(RSU)