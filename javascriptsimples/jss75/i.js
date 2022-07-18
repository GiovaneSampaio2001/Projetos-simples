// AUMENTADO E DIMINUIDO SUA IDADE

function AUMENTADO(Nome,Idade,Mais){
  return  ` Olá ${Nome} Você Tem ${Idade} Anos Mais Aumentado Sua Idade Por ${Mais}  Você Ficara Com ${Idade+Mais} Anos De Idade `
}

console.log(AUMENTADO("Giøvane",21,21))
console.log(AUMENTADO("Elliot",20,15))
console.log(AUMENTADO("Fin",18,18))

function DIMINUIDO(Name,age,low){
return ` Olá ${Name} Você Tem  ${age} Anos Mais Diminuido Sua Idade Por ${low} Você Ficara Com ${age-low} Anos De Idade `
}

console.log(DIMINUIDO("Giøvane",21,15))
console.log(DIMINUIDO("Elliot",20,5))
console.log(DIMINUIDO("Fin",18,8))