// COLOCANDO NÚNERO E LETRAS NO ARRAY SEPARADO 

function Numeros(Guardado){
let VNu=[]
for([key,value] of Guardado){
  if(value=="Número"){
    VNu.push(key)
  }
}
return VNu
}

function Letras(Le){
let Vlt=[]
for([key,value] of Le){
  if(value==="Letra"){
    Vlt.push(key)
  }
}
return Vlt
}

let EXEMPLOS=new Map()
EXEMPLOS.set("A","Letra")
EXEMPLOS.set("z","Letra")
EXEMPLOS.set(100,"Número")
EXEMPLOS.set(10,"Número")
EXEMPLOS.set("g","Letra")
EXEMPLOS.set(1000,"Número")
EXEMPLOS.set(0,"Número")
EXEMPLOS.set("i","Letra")
EXEMPLOS.set("B","Letra")
EXEMPLOS.set('D',"Letra")
EXEMPLOS.set(4000,"Número")
EXEMPLOS.set(20000,"Número")
EXEMPLOS.set(999,"Número")
EXEMPLOS.set(980,"Número")

console.log(Numeros(EXEMPLOS))
console.log(Letras(EXEMPLOS))