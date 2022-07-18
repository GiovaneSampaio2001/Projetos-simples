function AdicionadoNome(Nome,Sobrenome){
 let promise=new Promise((resolve,reject)=>{
   setTimeout(()=>{
     if(!Nome || !Sobrenome){
       reject("ERRO INFORME SEU NOME É SOBRENOME")
     }
     else{
       resolve(Nome + Sobrenome)
     }
   },1000)
 })
 return promise
}

AdicionadoNome(" Giøvane "," Wrld ").then((resu)=>{
  console.log(" Bem Vindo Ao Mundo " + resu)
})
.catch((e)=>{
  console.log(e)
})

AdicionadoNome(" Fin ").then((resu)=>{
  console.log(Resu)
})
.catch((e)=>{
  console.log(e)
})