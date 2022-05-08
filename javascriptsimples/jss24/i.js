let Cores=["Azul","Preto","Rosa","Cinza"]
function EuAmoEssasCores(colors){
  return ` Eu Amo Essa Cor ${colors} `
}

let Resu=Cores.map(EuAmoEssasCores)
console.log(Resu)

function EuOdeiaEssasCores(Colors){
  return ` Eu Odeio Essa Cor ${Colors} `
}

let Resultado=Cores.map(EuOdeiaEssasCores)
console.log(Resultado)