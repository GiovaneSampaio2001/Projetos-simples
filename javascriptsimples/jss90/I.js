function EstamosEm(Mes){
let promise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(!Mes){
      reject(" ERRO:VOCÊ NÃO INFORMOU O MÊS QUE ESTAMOS ")
    }else{
      resolve(" ESTAMOS EM " + Mes)
    }
  },1000)
})
return promise
}

async function Resultado(Mes){
  try{
let Resu= await EstamosEm(Mes)
console.log(Resu)
}
catch(e){
  console.log(e)
}

}

Resultado(" JANEIRO ")
Resultado(" DEZEMBRO ")