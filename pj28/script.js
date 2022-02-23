function Clicou(){
let Name=window.prompt("Informe Seu Nome")
let Res=document.getElementsByTagName("button")[0]
if(Name === ""){
Res.innerHTML=` VOCÊ ESQUECEU DE  INFORMA O SEU NOME &#x1F62D;`
document.body.style.background="lightblue"
}
else{
Res.innerHTML=` OBRIGADO POR CLICAR NO BOTÃO  ${Name} &#x1F604;`
document.body.style.background="blue"
}

}
