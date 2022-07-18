function Ingles(Name1){
  alert(` Hello ${Name1} `)
}

function Portugues(Name2){
  alert(` Olá ${Name2} `)
}

function Espanhol(Name3){
  alert(` Hola ${Name3} `)
}

function AdicionadoNome(callback){
 var Nome=prompt("Informe Seu Nome")
 callback(Nome)
}

AdicionadoNome(Espanhol)