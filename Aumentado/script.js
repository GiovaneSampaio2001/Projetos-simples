var Letra=10 

function AumentouLetra(){
let ResuLetra=document.getElementById("Letra")
Letra=Letra+1
ResuLetra.style.fontSize=` ${Letra}px `

}

function DiminuidoLetra(){
let LetraResu=document.getElementById("Letra")
Letra=Letra-1
LetraResu.style.fontSize=` ${Letra}px `
}

var Numero=10 

function AumentadoNumero(){
let ResuNumero=document.getElementById("Number")
Numero=Numero+1
ResuNumero.style.fontSize=` ${Numero}px `
}

function DiminuidoNumero(){
let NumeroResu=document.getElementById("Number")
Numero=Numero-1 
NumeroResu.style.fontSize=` ${Numero}px`
}
