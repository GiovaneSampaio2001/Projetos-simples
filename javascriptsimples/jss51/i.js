// BRINCANDO COM VETOR

let Nomes=["Gïøvane","Fin","Elliot"]
let Nacionalidade=["Noruegues","Holandes","Inglês"]

for(let i in Nacionalidade){
  console.log(` Sou ${Nomes[i]} É Sou ${Nacionalidade[i]}  `)
}

let Boa=[" Bom Dia "," Boa Noite "," Boa Noite"]

for(let i in Boa){
  console.log(` ${Boa[i]} ${Nomes[i]} `)
}

let Pais=["Brasil","Canada","Estados Unidos"]

for(let i in Pais){
  console.log(` O ${Nomes[i]} Visitou O ${Pais[i]}  `)
}

let Odeia=["Queijo","Chocolate","Pão De Queijo"]

for(let i in Odeia){
  console.log(` O ${Nomes[i]} Não Gosta De ${Odeia[i]} `)
}

let Gosta=["Feijoada","Sorvete","Bolo De Morango"]

for(let i in Gosta){
  console.log(` O ${Nomes[i]} Gosta De ${Gosta[i]} `)
}

let MateriaFavorita=["Fisica","Português","Educação Fisica"]

for(let i in MateriaFavorita){
  console.log(` Sua Matéria Favorita Na Escola ${Nomes[i]} É ${MateriaFavorita[i]}`)
}

let MateriaMenosFavorita=["Matématica","Historia","Artes"]

for(let i in MateriaMenosFavorita){
  console.log(` ${Nomes[i]} Sua Matéria Menos Favorita Na Escola É ${MateriaMenosFavorita[i]}  `)
}