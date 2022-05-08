// VERIFICANDO SER VOCÊ INFORMOU O NÚMERO OU NÃO

function AdicionadoNumero(Numero){
try{
  if(!Numero) throw new ReferenceError(" Erro Você Não Informo Número")
  return Numero
}
catch(e){
  throw e.message
}
}
console.log(AdicionadoNumero(110))