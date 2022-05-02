function Somando_Notas(){ 
  return ` Olá ${this.Nome} Na Primeira Prova Você Tirou ${this.Nota1}  E Na Segunda Nota Você Tirou ${this.Nota2} Juntando A Duas Notas E Dividido Por 2 Sua Media Final Será De ${this.Nota1+this.Nota2/2} `
  
}


let Primeira_Pessoa={
  Nome:"Gïøvane",
  Nota1:5.2,
  Nota2:2.0
}

let Segunda_Pessoa={
  Nome:"Gïøvane",
  Nota1:5.1,
  Nota2:3.4,
}

let Terceira_Pessoa={
  Nome:"Fin",
  Nota1:3.0,
  Nota2:2.5,
}

let Quarta_Pessoa={
  Nome:"Shanelle",
  Nota1:2.0,
  Nota2:8.0
}

let Quinta_Pessoa={
  Nome:"Dyego",
  Nota1:6.0,
  Nota2:2.6,
}

let Sexta_Pessoa={
  Nome:"Ruan",
  Nota1:5.0,
  Nota2:5.5
}

let Setima_Pessoa={
  Nome:"Eren",
  Nota1:1.9,
  Nota2:5.0
}

let Oitava_Pessoa={
  Nome:"Mikassa",
  Nota1:5.4,
  Nota2:9
}

let Nona_Pessoa={
  Nome:"Levi",
  Nota1:8,
  Nota2:5.0,
}

let Decima_Pessoa={
  Nome:"Nina",
  Nota1:7.8,
  Nota2:1.9,
}

const RESULTADO_DAS_NOTAS=Somando_Notas.call(Decima_Pessoa)
console.log(RESULTADO_DAS_NOTAS)