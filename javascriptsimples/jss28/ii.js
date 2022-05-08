function Hello1(World1){
let promise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(!World1){
      reject(" ERRO ")
    }
    else{
      resolve(World1)
    }
  }, 1000);
})
return promise
}
Hello1(" Hello World ")
.then((resu)=>{
  console.log(resu)
})
.catch((error)=>{
  console.log(error)
})

function Hello2(World2){
let promise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(!World2){
      reject(" ERROR ")
    }
    else{
      resolve(World2)
    }
  },2000)
})
return promise
}
Hello2(" Hello World ")
.then((resu)=>{
  console.log(resu)
})
.catch((error)=>{
  console.log(error)
})

function Hello3(World3){
let promise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(!World3){
      reject("ERROR")
    }
    else{
      resolve(World3)
    }
  },3000)
})
return promise
}

Hello3(" Hello World ")
.then((resu)=>{
  console.log(resu)
})
.catch((error)=>{
  console.log(error)
})

function Hello4(World4){
let promise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(!World4){
      reject("ERROR")
    }
    else{
      resolve(World4)
    }
  },4000)
})
return promise
}
Hello4(" Hello World ")
.then((resu)=>{
  console.log(resu)
})
.catch((erro)=>{
  console.log(erro)
})
function Hello5(World5){
let promise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(!World5){
      reject("ERROR")
    }
    else{
      resolve(World5)
    }
  },5000)
})
return promise
}
Hello5(" Hello World ")
.then((resu)=>{
  console.log(resu)
})
.catch((error)=>{
  console.log(error)
})