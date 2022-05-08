// SOACEITAMOS NUMEROPOSITIVO
function SoNumerosPositivo(Numero){
  if(Numero<0) throw " ERRO SO ACEITAMOS NÚMEROS POSITIVOS "
  return Numero
}

function VericandoErro(Numero){
  try{
    SoNumerosPositivo(Numero)
  }
  catch(e){
    console.log(e.message)
  }
  
}
console.log(SoNumerosPositivo(1))

// SO ACEITAMOS NOMES MAIÚSCULO

function NOMESMAIUSCULO(NOME){
  if(NOME==NOME.toLowerCase()) throw " ERRO SO ACEITAMOS NOME EM MAIÚSCULO"
  return NOME
}

function Ero2(NOME){
  try{
    NOMESMAIUSCULO(NOME)
  }
  catch(e){
    throw e
  }
}
console.log(NOMESMAIUSCULO("giovane"))