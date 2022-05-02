// ARRAY GUARDADO ANIMAIS
function Animais(Animal){
let Guardado_Animal=[]
for([key,value] of Animal){
  if(value=="Animal"){
    Guardado_Animal.push(key)
  }
}
return Guardado_Animal
}

// ARRAY GUARDADO PESSOAS

function PESSOAS(People){
let Guardado_Pessoas=[]
for([key,value] of People){
  if(value=="Pessoa"){
    Guardado_Pessoas.push(key)
  }
}
return Guardado_Pessoas
}

// ARRAY GUARDADO Frutas

function Frutas(Fru){
let Guardado_Frutas=[]
for([key,value] of Fru){
  if(value=="Fruta"){
    Guardado_Frutas.push(key)
  }
}
return Guardado_Frutas
}

let Coisas=new Map()
Coisas.set("Gato","Animal")
Coisas.set("Gïøvane","Pessoa")
Coisas.set("Banana","Fruta")
Coisas.set("Fin","Pessoa")
Coisas.set("Maça","Fruta")
Coisas.set("Uva","Fruta")
Coisas.set("Coelho","Animal")
Coisas.set("Cavalo","Animal")
Coisas.set("Shanelle","Pessoa")
Coisas.set("Manga","Fruta")
Coisas.set("Melancia","Fruta")
Coisas.set("Connie","Pessoa")
Coisas.set("Charlie","Pessoa")
Coisas.set("Hamster","Animal")
Coisas.set("Elefante","Animal")
Coisas.set("Goiaba","Fruta")
Coisas.set("Pera","Fruta")
Coisas.set("Laranja","Fruta")
Coisas.set("Morango","Fruta")
Coisas.set("Maracuja","Fruta")
Coisas.set("Limão","Fruta")
Coisas.set("Ana","Pessoa")
Coisas.set("Aline","Pessoa")
Coisas.set("Gil","Pessoa")
Coisas.set("Arthur","Pessoa")

console.log(Animais(Coisas))
console.log(PESSOAS(Coisas))
console.log(Frutas(Coisas))