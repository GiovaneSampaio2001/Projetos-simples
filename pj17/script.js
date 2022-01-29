function Clicou(){
    var Inicio=document.getElementById("Ti")
    var Fim=document.getElementById("Tf")
    var Passos=document.getElementById("Te")
    var Res=document.getElementsByTagName("p")[0]
    if(Inicio.value.length==0 || Fim.value.length==0 || Passos.value.length==0){
        window.alert("Campos Vazios Prenchaos")
    }
    else{
        Res.innerHTML='Contador <br>'
        var i=Number(Inicio.value)
        var f=Number(Fim.value)
        var p=Number(Passos.value)
        if(p==0){
          window.alert("Erro Passo Invalido")
          p=1
        }
    }
    if(i<f){
        for(var ii=i;ii<=f;ii=ii+p){
            Res.innerHTML+=` ${ii} &#x1F449;`
        }
    }
        else{
            for(var ii=i;ii>=f;ii=ii-p){
                Res.innerHTML+=` ${ii} &#x1F448;`
            }
        }
        Res.innerHTML+='&#x1F3C1;'
    
    }
    
    