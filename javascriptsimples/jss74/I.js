function HelloWorld(Name){
let promise=new Promise((resolve,reject)=>{
  if(!Name){
    reject("INFORME SEU NOME")
  }
  else{
    resolve(" Hello World " + Name)
  }
})
return promise
}

async function Executado(Name){
  try{
let ResultadoDaExecucao=await HelloWorld(Name)
console.log(ResultadoDaExecucao)
}
catch(e){
  console.log(e)
}
}

Executado("Giøvane")
Executado("Fin")
Executado("Elliot")
Executado("Shanelle")
Executado("Connie")
Executado("Frances")