// TRATAMENTO DE ERRO SER VOCÊ NÃO INFORMA NADA O PROGRAKA DA ERRO


function InformadoSeuNome(Nome){
  try{
    if(!Nome) throw " ERRO VOCÊ NÃO INFORMOU SEU NOME "
    return Nome
  }
  catch(e){
  throw  e.message
  }
}
console.log(InformadoSeuNome())