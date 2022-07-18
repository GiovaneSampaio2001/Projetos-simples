function SoNúmeroPositivo(Numero){
let promise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(Numero<0){
      reject("ERRO SO ACEITAMOS NÚMERO POSITIVO")
    }
    else{
      resolve(Numero)
    }
  },1000)
})
return promise
}

SoNúmeroPositivo(-20).then((ok)=>{
  console.log(` O Programar Foi Um Sucessor O Número ${ok} É Positivo`)
})
.catch((erro)=>{
  console.log(erro)
})