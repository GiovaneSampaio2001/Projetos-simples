function ValorEmDolar(Dolar){
  console.log(Dolar.toLocaleString('en',{style:'currency',currency:"USD"}))
}

function ValorEmReal(Real){
  console.log(Real.toLocaleString("pt-BR",{
    style:'currency',currency:'BRL'
  }))
}

function AdicionadoValor(Valor,callback){
  callback(Valor)
}

AdicionadoValor(0,ValorEmReal)
AdicionadoValor(0,ValorEmDolar)
AdicionadoValor(10,ValorEmDolar)
AdicionadoValor(10,ValorEmReal)
AdicionadoValor(20,ValorEmReal)
AdicionadoValor(20,ValorEmDolar)
AdicionadoValor(30,ValorEmDolar)
AdicionadoValor(30,ValorEmReal)
AdicionadoValor(40,ValorEmReal)
AdicionadoValor(40,ValorEmDolar)
AdicionadoValor(50,ValorEmDolar)
AdicionadoValor(50,ValorEmReal)