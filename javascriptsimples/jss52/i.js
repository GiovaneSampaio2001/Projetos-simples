function Cantor(Nome){
let promise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(!Nome){
      reject("Insira Seu Nome De Cantor Porra")
    }
    else{
      resolve(Nome)
    }
  },1000)
})
return promise
}

Cantor("Gïøvane")
.then((resu)=>{
  console.log(` Meu Nome De Cantor É ${resu} Porra`)
})
.catch((e)=>{
   console.log(e)
})
Cantor("Fin")
.then((resu)=>{
  console.log(` Meu Nome De Cantor É ${resu} Porra`)
})
.catch((e)=>{
  console.log(e)
})
Cantor()
.then((resu)=>{
  console.log(` Meu Nome De Cantor É ${resu} Porra`)
})
.catch((e)=>{
  console.log(e)
})