function Clicou(){
let horas=new Date()
let Horas=horas.getHours()
let minutos=new Date()
let Minutos=minutos.getMinutes()
let segundos=new Date()
let Segundos=segundos.getSeconds()

let Tname=document.querySelector("#Tname")
let Resu=document.querySelector(".Resultado")

if(Tname.value.length===0){
  window.alert(` ERRO:Por Favor Informe Seu Name`)
}
else{
  let Nome=(Tname.value)
  Resu.innerHTML+=` Olá ${Nome} São Exatamente ${Horas}:${Minutos}:${Segundos}  Horas `
  Resu.style.textAlign="Center"
  Resu.style.textShadow="1px 2px 3px black"
}


}
