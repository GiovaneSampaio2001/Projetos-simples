function PositivoOuNegativo(Valor){
  if(Valor>=0){
    console.log(` O Número  ${Valor} É Positivo `)
  }
  else if(Valor<0){
    console.log(` O Número ${Valor} É Negativo `)
  }
}

function VerificandoONúmero(CallBack,Numero){
  CallBack(Numero)
}

VerificandoONúmero(PositivoOuNegativo,0)
VerificandoONúmero(PositivoOuNegativo,-100)
VerificandoONúmero(PositivoOuNegativo,9)
VerificandoONúmero(PositivoOuNegativo,-10)
VerificandoONúmero(PositivoOuNegativo,999)
VerificandoONúmero(PositivoOuNegativo,55)
VerificandoONúmero(PositivoOuNegativo,-99)
VerificandoONúmero(PositivoOuNegativo,8)
