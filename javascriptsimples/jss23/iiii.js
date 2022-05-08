// JAVASCRIPT ASSICRONA
function AdicionadoNome(Nome){
let pro=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(!Nome){
      reject("ERROR VOCÊ NÃO INFORMOU SEU NOME")
    }
    else{
      resolve(Nome)
    }
  }, 2000);
})
return pro
}
AdicionadoNome("Gïøvane").then((Name)=>{
  console.log(` ${Name} Foi Adicionado`)
}).catch((error)=>{
  console.log(error)
})

AdicionadoNome("Fin").then((Name)=>{
  console.log(` ${Name} Foi Adicionado`)
}).catch((erro)=>{
  console.log(erro)
})

// JAVASCRIPT ASSICRONA COM NÚMEROS

function Somando(N,NN){
let pro=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(!N && !NN){
      reject("ERROR VOCÊ NÃO INFORMOU OS DOIS NÚMEROS PARA A SOMA")
    }
    else{
      resolve(N+NN)
    }
  },2000)
})
return pro
}
Somando(1,2).then((Soma)=>{
  console.log(` A Soma Dos Valores Foi ${Soma}`)
}).catch((error)=>{
  console.log(error)
})