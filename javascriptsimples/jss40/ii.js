// Com Qual Letra Começa SeClaudia

function ComecaCom(Names){
  return ` O Seu Nome ${Names} Começa Com Letra ${Names.charAt(Names)}  `
}

let Nomes=["Gïøvane","Fin","Elliot","Shanelle","Frances","Connie","Yuri","Miguel","Anna","Sandra","Claudia","Eren","Aharen","Mikassa","Armin","Deku","Anne","Mariana","Agatha","Messi"]

let Resultado=Nomes.map(ComecaCom)
console.log(Resultado)