// JAVASCRIPT ASSICRONO COM MINHA BIOGRAFIA

function MeuNome(Nome){
let promise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(!Nome){
      reject("ERROR:Você Não Informou Os Dados")
    }
    else{
      resolve(Nome)
    }
  }, 1000);
})
return promise
}


MeuNome("Gïøvane")
.then((Name)=>{
  console.log(` Meu Chamo ${Name} `)
})
.catch((error)=>{
  console.log(error)
})

function MeuSobrenome(Sobrenome){
let promise2=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(!Sobrenome){
      reject("ERROR:Você Não Inseriu Seus Dados")
    }
    else{
      resolve(Sobrenome)
    }
    
  },1000)
})
return promise2
}
MeuSobrenome(" Sampaio Sales De Jesus").then((lastname)=>{
  console.log(` Meu Sobrenome É ${lastname} `)
}).catch((error)=>{
  console.log(error)
})

function MinhaIdade(Idade){
let promise3=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(!Idade){
      reject("ERROR:Você Não Informou")
    }
    else{
      resolve(Idade)
    }
  })
})
return promise3
}
MinhaIdade(21)
.then((age)=>{
  console.log(` Tenho ${age} Anos `)
})
.catch((error)=>{
  console.log(error)
})