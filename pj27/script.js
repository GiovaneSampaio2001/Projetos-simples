function Calculadora(){
  let Valores=Number(prompt('Escola A Operação \n 1.Subtração \n 2.Adição \n 3.Multiplicação \n 4.Divisão '))
  
let N1=Number(window.prompt("Informe O Primeiro Valor"))

let N2=Number(window.prompt("Informe O Segundo Valor"))



let Somar;

function Subtracao(){
  Somar=N1-N2
  alert(` ${N1} - ${N2} = ${Somar} `)
}

function Adicao(){
  Somar=N1+N2
  alert(` ${N1} + ${N2} = ${Somar}`)
}
  
function Multiplicacao(){
  Somar=N1*N2
  alert(` ${N1} X ${N2}  = ${Somar} `)
  
}

function Divisao(){
  Somar=N1/N2 
  alert(` ${N1} ÷ ${N2} = ${Somar}`)
}
  
if(Valores==1){
  Subtracao()
}else if(Valores==2){
  Adicao()
}else if(Valores==3){
  Multiplicacao()
}else if(Valores==4){
  Divisao()
}

function NovaOperacao(){
  const Operacao=prompt("Nova Operação \n 1.Sim \n 2.Não")
  if(Operacao==1){
    Calculadora()
  }else{
    alert("Ate Mais")
  }
}
NovaOperacao()


  
}


Calculadora()