// Que Horas São

function QueHorasSao(){
let H=new Date()
let Horas=H.getHours()
let M=new Date()
let Minutos=M.getMinutes()
let S=new Date()
let Segundos=S.getSeconds()

return ` Olá Por Favor Que Horas São Ok ${this.Nome} São ${Horas}:${Minutos}:${Segundos} Horas `

}

let Pessoa1={
  Nome:'Gïøvane'
}

let Pessoa2={
  Nome:"Fin"
}

let Pessoa3={
  Nome:"Elliot"
}

let Resultado= QueHorasSao.call(Pessoa2)
console.log(Resultado)