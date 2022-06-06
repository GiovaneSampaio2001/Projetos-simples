// VALOR EM DOLAR E REAL

let Nomes=["Gïøvane","Fin","Elliot"]
let Valores=[500,999,1000]

for(let i in Nomes){
  console.log(` O Número ${Valores[i]} ${Nomes[i]} Em Dolar Fica Assim  ${Valores[i].toLocaleString(`en`,{style:'currency',currency:'USD'})}`)
}

console.log(" ACIMA O VALOR EM DOLAR ABAIXO O VALOR EM REAL")


for(let ii in Valores){
  console.log(` O Número ${Valores[ii]} Em Real ${Nomes[ii]} Ficara Assim ${Valores[ii].toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`)
}