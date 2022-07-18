function NaoClick(){
document.body.style.background="red"
let Nome=prompt("Digite Seu Nome Por Favor")
let Resu=document.getElementById("Resu1")
Resu.innerHTML=` Não Click Aqui ${Nome} Seu Idiota &#x1F621; &#x1F92C;`
Resu.style.color="white"
Resu.style.textAlign="center"
}

function ClickAqui(){
let Name=prompt("Informe Seu Nome Por Favor!")
let Resultado=document.getElementById("Resu2")
Resultado.innerHTML=` Obrigando Por Clicar No Botão Certo ${Name} &#x1F601; &#x1F600;
`
document.body.style.background="blue"
Resultado.style.color="white"
Resultado.style.textAlign="center"
}