let On1=()=>{
let Mud1=document.querySelector(".Caixa1")
Mud1.style.display="flex"
Mud1.style.flexDirection="row"
Mud1.style.justifyContent="flex-end"
Mud1.style.background="lightblue"
}

let Off1=()=>{
let Mud2=document.querySelector(".Caixa1")
Mud2.style.display="flex"
Mud2.style.flexDirection="row"
Mud2.style.justifyContent="flex-start"
Mud2.style.background="white"
}

function On2(){
let Mud3=document.querySelector(".Caixa2")
Mud3.style.display="flex"
Mud3.style.flexDirection="row"
Mud3.style.justifyContent="flex-end"
Mud3.style.background="lightgreen"
}

function Off3(){
let Mud4=document.querySelector(".Caixa2")
Mud4.style.display="flex"
Mud4.style.flexDirection="row"
Mud4.style.justifyContent="flex-start"
Mud4.style.background="white"
}

function On4(){
let Mud5=document.querySelector('.Caixa3')
Mud5.style.display="flex"
Mud5.style.flexDirection="row"
Mud5.style.justifyContent="flex-end"
Mud5.style.background="lightpink"
}

function Off4(){
let Mud6=document.querySelector(".Caixa3")
Mud6.style.display="flex"
Mud6.style.flexDirection="row"
Mud6.style.justifyContent="flex-start"
Mud6.style.background="white"
}

function On5(){
let Mud7=document.querySelector(".Caixa4")
Mud7.style.display="flex"
Mud7.style.flexDirection="row"
Mud7.style.justifyContent="flex-end"
Mud7.style.background="lightskyblue"
}

function Off5(){
let Mud8=document.querySelector(".Caixa4")
Mud8.style.display="flex"
Mud8.style.flexDirection="row"
Mud8.style.justifyContent="flex-start"
Mud8.style.background="white"
}

function On6(){
let Mud9=document.querySelector(".Caixa5")
Mud9.style.display="flex"
Mud9.style.flexDirection="row"
Mud9.style.justifyContent="flex-end"
Mud9.style.background="lightyellow"
}

function Off6(){
let Mud10=document.querySelector(".Caixa5")
Mud10.style.display="flex"
Mud10.style.flexDirection="row"
Mud10.style.justifyContent="flex-start"
Mud10.style.background="white"
}

window.setInterval(On1,1000)
window.setInterval(Off1,2000)
window.setInterval(On2,1000)
window.setInterval(Off3,2000)
window.setInterval(On4,1000)
window.setInterval(Off4,2000)
window.setInterval(On5,1000)
window.setInterval(Off5,2000)
window.setInterval(On6,1000)
window.setInterval(Off6,2000)

