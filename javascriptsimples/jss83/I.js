function VemAqui(){
  return ` Vem Aqui ${this.Nome} `
}


var PrimeiraPessoa={
  Nome:"Giøvane"
}

var SegundaPessoa={
  Nome:"Fin"
}

var TerceiraPessoa={
  Nome:"Elliot"
}

let Resultado=VemAqui.call(PrimeiraPessoa)
console.log(Resultado)