// NÚMEROS COM CASAS DECIMAIS

function Numero(Valor,CasasDecimais){
  return ` O Número ${Valor} Com ${CasasDecimais} Casa Decimal Vai Ficar Assim ${Valor.toFixed(CasasDecimais)}  `
}

console.log(Numero(100,1))