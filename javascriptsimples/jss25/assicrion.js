// ASSICRONO 1
function Bom(Resu){
let promise1=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(!Resu){
      reject("ERROR Você Não  Informou Algo")
    }
    else{
      resolve(Resu)
    }
  } ,5000);
})
return promise1
}
Bom(" Bom Dia ").then((Resu)=>{
  console.log(Resu)
}).catch((error)=>{
  console.log(error)
})

Bom(" Boa Tarde ").then((Resu)=>{
  console.log(Resu)
}).catch((error)=>{
  console.log(error)
})

Bom(" Boa Noite ").then((Resu)=>{
  console.log(Resu)
}).catch((error)=>{
  console.log(error)
})
// ASSICRONO 2 

function Hello(Resultado){
let promise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(!Resultado){
      reject("ERROR:Por Favor Informe Algo")
    }
    else{
      resolve(Resultado)
    }
  },5000)
})
return promise
}
Hello(" HELLO WORLD 1 ")
.then((Resultado)=>{
  console.log(Resultado)
})
.catch((error)=>{
  console.log(error)
})

Hello(" HELLO WORLD 2")
.then((Resultado)=>{
  console.log(Resultado)
})
.catch((error)=>{
  console.log(error)
})
Hello(" HELLO WORLD 3 ")
.then((Resultado)=>{
  console.log(Resultado)
})
.catch((error)=>{
  console.log(error)
})

Hello(" HELLO WORLD 4 ")
.then((Resultado)=>{
  console.log(Resultado)
})
.catch((error)=>{
  console.log(error)
})
Hello(" HELLO WORLD 5 ")
.then((Resultado)=>{
  console.log(Resultado)
}).catch((error)=>{
  console.log(error)
})
