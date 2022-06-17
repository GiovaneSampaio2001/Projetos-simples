// SOBRENOMES EM INGLÊS 

function People(Name){
let promise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(!Name){
      Reject("ERRO INFORME SEU NOME")
    }
    else{
      resolve(Name)
    }
  },3000)
})
return promise
}

People(" Giøvane ")
.then((resu)=>{
  console.log(` Olá ${resu} Brooks`)
})
.catch((erro)=>{
  console.log(erro)
})
People("Elliot")
.then((resu)=>{
  console.log(` Olá ${resu} Gribbin`)
})
.catch((erro)=>{
  console.log(erro)
})
People("Fin")
.then((resu)=>{
  console.log(` Olá ${resu} Cash  `)
})
.catch((erro)=>{
  console.log(erro)
})
People("Shanelle")
.then((resu)=>{
  console.log(` Olá ${resu} Coultas`)
})
.catch((erro)=>{
  console.log(erro)
})