// EMOJINS

function MAISUSADOS(EMO){
  return `Eu Usso Muito Esse Emojin - ${EMO}`
}

function menosusad(emo){
  return ` Eu Não Usso Muito Esse Emojin - ${emo} `
}

let menosusados=["😙","💔","💩","🐗","👀","🛌"]

let EMOJINSMAISUSADOS=
  ["😀","🎃","🤖","🎅","📶","♠"]

let RESULTADO=EMOJINSMAISUSADOS.map(MAISUSADOS)
let resultado=menosusados.map(menosusad)

console.log(RESULTADO)
console.log(resultado)