// SOMANDO OS NÚMERO INFORMANDO MESAGEM DE ERRO CASO VOCÊ NÃO INFORME UM NÚMERO

function SomaNumeros(Nu,NU){
  if(!Nu || !NU) throw " ERRO VOCÊ NÃO INFORMOU OS NÚMEROS DA SOMA"
  return Nu + NU
}


function Verificando(Nu,NU){
  try{
    SomaNumeros(Nu,NU)
  }
  catch(e){
    throw e
  }
}
console.log(SomaNumeros(12,1))