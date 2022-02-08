

var Resu=document.getElementsByTagName("p")[0]

function Click1(){
    var Hrs= new Date()
    var Horas=Hrs.getHours()
    var Mi= new Date()
    var Minutos=Mi.getMinutes()
    var Seg= new Date()
    var Segundos=Seg.getSeconds()
    Resu.innerHTML=` São Exatamente  ${Horas}:${Minutos}:${Segundos}  Horas`
}

function Click2(){
    var Sem=new Date()
    var Semana=Sem.getDay()
    switch(Semana){
        case 0:
        Resu.innerHTML=" Hojê É Domingo"
        break
        case 1:
        Resu.innerHTML=" Hojê É Segunda-Feira"
        break
        case 2:
        Resu.innerHTML= "Hojê É Terça-feira"
        break
        case 3:
        Resu.innerHTML= " Hojê É Quarta-feira"
        break
        case 4:
        Resu.innerHTML= " Hojê É Quinta-Feira"
        break
        case 5:
        Resu.innerHTML= " Hojê É Sexta-Feira"
        break
        case 6:
        Resu.innerHTML= " Hojê É Sâbado"
        break
        default:
        Resu.innerHTML= " Semana Invalida"
        break
    }
}

function Click3(){
    var ms=new Date()
    var Mês= ms.getMonth()
    switch(Mês){
        case 0:
        Resu.innerHTML= " Estamos Em Janeiro "
        break
        case 1:
        Resu.innerHTML= " Estamos Em Fevereiro"
        break
        case 2:
        Resu.innerHTML= " Estamos Em Março"
        break
        case 3:
        Resu.innerHTML= " Estamos Em Abril"
        break
        case 4:
        Resu.innerHTML= " Estamos Em Maio"
        break
        case 5:
        Resu.innerHTML= " Estamos Em Junho"
        break
        case 6:
        Resu.innerHTML= " Estamos Em Julho"
        break
        case 7:
        Resu.innerHTML= " Estamos Em Agosto"
        break
        case 8:
        Resu.innerHTML= " Estamos Em Setembro"
        break
        case 9:
        Resu.innerHTML= " Estamos Em Outubro"
        break
        case 10:
        Resu.innerHTML= " Estamos Em Novembro"
        break
        case 11:
        Resu.innerHTML= " Estamos Em Dezembro"
        break
        default:
        Resu.innerHTML= " [ERRO] Mês Invalido "
        break
    }
}