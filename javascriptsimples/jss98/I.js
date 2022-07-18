let NomesGrandes=Names=>{
  return Names.toUpperCase()
}

let NomesPequenos=Nomes=>{
  return Nomes.toLowerCase()
}

console.log(NomesGrandes("Giøvane"))
console.log(NomesPequenos("Giøvane"))
console.log(NomesPequenos("Elliot"))
console.log(NomesGrandes("Elliot"))
console.log(NomesPequenos("Fin"))
console.log(NomesGrandes("Fin"))