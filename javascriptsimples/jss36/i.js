// HELLO WORLD PESSOA 

function HelloWorld(Pais){
  return ` Hello World ${this.Nome}  ${Pais} ${this.Nome} `
}

let Name1={
  Nome:"Gïøvane"
}

let Name2={
  Nome:"Fin"
}

let Name3={
  Nome:"Elliot"
}

let Name4={
  Nome:"Shanelle"
}

let Name5={
  Nome:"Frances"
}

let Name6={
  Nome:"Aharen"
}

let Name7={
  Nome:"Miguel"
}

let Name8={
  Nome:"Juice WRLD "
}

let Name9={
  Nome:"Lil PEEP"
}

let Name10={
  Nome:"XXXTentacion"
}

let Resultado=HelloWorld.call(Name10,"Olá Mundo")
console.log(Resultado)