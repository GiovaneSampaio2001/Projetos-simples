function Noite(Resu1){
  console.log(` ${Resu1} NOITE `)
}

function Dia(Resu2){
  console.log(` ${Resu2} DIA `)
}

function Tarde(Resu3){
  console.log(` ${Resu3} TARDE `)
}

function Madrugada(Resu4){
  console.log(` ${Resu4} MADRUGADA`)
}

function Resultado(Resu,callback){
  callback(Resu)
}

Resultado("Boa",Madrugada)