// VALORES EM DOLAR EM REAL


function EmDolar(Valor){
return ` O Número ${Valor} Em Dolar Ficara Assim ${Valor.toLocaleString('en',{style:'currency',currency:'USD'})}  `
}

console.log(EmDolar(1))

function EmReal(Valor){
return ` O Número  ${Valor} Em Real Ficara Assim ${Valor.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} `
}

console.log(EmReal(1))