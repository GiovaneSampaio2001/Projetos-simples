// EMOJINS

function MAISUSADOS(EMO){
  return `Eu Usso Muito Esse Emojin - ${EMO}`
}

function menosusad(emo){
  return ` Eu NÃ£o Usso Muito Esse Emojin - ${emo} `
}

let menosusados=["ð","ð","ð©","ð","ð","ð"]

let EMOJINSMAISUSADOS=
  ["ð","ð","ð¤","ð","ð¶","â "]

let RESULTADO=EMOJINSMAISUSADOS.map(MAISUSADOS)
let resultado=menosusados.map(menosusad)

console.log(RESULTADO)
console.log(resultado)