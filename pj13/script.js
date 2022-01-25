function Clicou(){
  var Money=document.getElementsByName("Dinheiro")
  var Din=document.getElementById("Valor")
  var Res=document.querySelector((".rse"))
  if(Din.value.length==0){
    window.alert("Erro Campo Vazio Prencha Com Um Numero")
  }
  else{
    var Dinheiro=Number(Din.value)
    var Imagem=document.createElement("img")
    if(Money[0].checked){
      Res.style.textAlign="Center"
      Res.innerHTML=`<p>O Valor Em Real Ficou Assim ${Dinheiro.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}</p><br>`
      Imagem.setAttribute('src','Imagens/Real1.jpg')
      Res.appendChild(Imagem)
      
    }
    else if(Money[1].checked){
      Res.style.textAlign="center"
      Res.innerHTML=`<p>O Valor Em Dolar Ficou Assim ${Dinheiro.toLocaleString('en',{style:'currency',currency:'USD'})}</p>
      `
      Imagem.setAttribute('src','Imagens/Dolar1.jpg')
      Res.appendChild(Imagem)
    }
  }
}