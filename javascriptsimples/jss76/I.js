function NomeEmMaiúsculo(Name){
  console.log(Name.toUpperCase())
}

function NomeEmMinúsculo(Nome){
  console.log(Nome.toLowerCase())
}

function AdicionadoNome(NomeDaPessoa,callback){
  callback(NomeDaPessoa)
}

AdicionadoNome("Giøvane",NomeEmMinúsculo)
AdicionadoNome("Giøvane",NomeEmMaiúsculo)