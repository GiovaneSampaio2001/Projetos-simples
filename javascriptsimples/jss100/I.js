function AdicionadoNumeroFavorito(Numero){
 let promise=new Promise((resolve,reject)=>{
   setTimeout(()=>{
     if(!Numero){
       reject('POR FAVOR INFORME SEU NÚMERO FAVORITO')
     }
     else{
       resolve(" MEU NÚMERO FAVORITO É " + Numero)
     }
   },1000)
 })
 return promise
}

async function EsperandoNumero(Numero){
  try{
let NumeroInformado=await AdicionadoNumeroFavorito(Numero)
console.log(NumeroInformado)
  }
  catch(erro){
    console.log(erro)
  }
  
}
EsperandoNumero(90)
EsperandoNumero()