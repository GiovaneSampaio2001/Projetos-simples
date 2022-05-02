function Bom_Dia(peoples){
  return " Bom Dia "  + peoples
}

function Boa_Tarde(peoples){
  return " Boa Tarde " + peoples
}

function Boa_Noite(peoples){
  return " Boa Noite " + peoples
}

function Boa_Madrugada(peoples){
  return " Boa Madrugada " + peoples
}

let Pessoas=["Gïøvane","Fin","Robot","Elliot","Shanelle","Josh","Jack","Aurio","Chrstian","Ana","Aline","Eren","Mikasa"]

let Resu_Bom_Dia=Pessoas.map(Bom_Dia)
console.log(Resu_Bom_Dia)

let Resu_Boa_Tarde=Pessoas.map(Boa_Tarde)
console.log(Resu_Boa_Tarde)

let Resu_Boa_Noite=Pessoas.map(Boa_Noite)
console.log(Resu_Boa_Noite)

let Resu_Boa_Madrugada=Pessoas.map(Boa_Madrugada)

console.log(Resu_Boa_Madrugada)