function Cima(){
let Resu=document.querySelector(".Caixa")
let Emo=document.querySelector(".Emojins")
Resu.style.display="flex"
Resu.style.flexDirection="column"
Resu.style.justifyContent="flex-start"
Emo.innerHTML=""
Emo.innerHTML="&#x1F600;"
}

function Baixo(){
let Res=document.querySelector(".Caixa")
let Emo=document.querySelector(".Emojins")
Res.style.display="flex"
Res.style.flexDirection="column"
Res.style.justifyContent="flex-end"
Emo.innerHTML=""
Emo.innerHTML="&#x2639;"
}

function Esquerda(){
let RS=document.querySelector(".Caixa")
let E=document.querySelector(".Emojins")
RS.style.display="flex"
RS.style.flexDirection="row"
RS.style.justifyContent="flex-start"
E.innerHTML=""
E.innerHTML="&#x1F637;"
}


function Direita(){
let e=document.querySelector(".Caixa")
let r=document.querySelector(".Emojins")
e.style.display="flex"
e.style.flexDirection="row"
e.style.justifyContent="flex-end"
r.innerHTML=""
r.innerHTML="&#x1F635;"
}

function ClicouDireita(){
let Saida=document.querySelector(".Resultado")
let RSU=document.querySelector(".Caixa2")
RSU.style.display="flex"
RSU.style.flexDirection="row"
RSU.style.justifyContent="flex-end"
Saida.innerHTML=""
Saida.innerHTML="&#x1F449;"
}


function ClicouEsquerda(){
let Emo=document.querySelector(".Resultado")
let Res=document.querySelector(".Caixa2")
Res.style.display="flex"
Res.style.flexDirection="row"
Res.style.justifyContent="flex-start"
Emo.innerHTML=""
Emo.innerHTML="&#x1F448;"
}

function ClicouCima(){
let Esc=document.querySelector(".Resultado")
let Cm=document.querySelector(".Caixa2")
Cm.style.display="flex"
Cm.style.flexDirection="column"
Cm.style.justifyContent="flex-start"
Esc.innerHTML=""
Esc.innerHTML="&#x1F595;"

}

function ClicouBaixo(){
let XXX=document.querySelector(".Resultado")
let XX=document.querySelector(".Caixa2")
XX.style.display="flex"
XX.style.flexDirection="column"
XX.style.justifyContent="flex-end"
XXX.innerHTML=""
XXX.innerHTML="&#x1F447"
}