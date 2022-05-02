let Nomes=["GÏØVANE","FIN","ELLIOT","RUAN","CAMILA","SHANELLE","FRANCES","ELLEN","CONNIE","AMMY","felipe","megan","juma","stephany","ellen","antonio","josh","jack","claudia","lucas","FERNADA","sophia","andré","THIAGO","ANNY","JADSON","kayki","arthur","sandro","FRED","THAINA","TALITA","THALIA","jailton","raimundo","joão","sheila","RICO","JEAN","SELMA","CRISTIANO","MASON","vinicius","rodrigo","marcelo","léo","yara","KAROL","AMANDA","RODRIGO","ALDENORA","IVONE","IRIS","GEOVANA","julio","erick","vinicius","beto","abner","eren","deku","LEVI","MIKASSA","IZUKI","JUICE","ADAMS","PATRIC","EVERSON","RAFAEL"]

// array com nomes minusculo

function nomes_minusculo(Nomes){
  return Nomes === Nomes.toLowerCase()
}
let nome_pequenos=Nomes.filter(nomes_minusculo)
console.log(nome_pequenos)
console.log(` no array tem ${nome_pequenos.length} pessoas com a letra em minusculo`)
// ARRAY COM NOMES EM MAIÚSCULO

function NOMES_MAIUSCULO(Nomes){
  return Nomes === Nomes.toUpperCase()
}

let NOMES_GRANDES=Nomes.filter(NOMES_MAIUSCULO)
console.log(NOMES_GRANDES)
console.log(` No Array Tem ${NOMES_GRANDES.length} PESSOAS COM A LETRA EM MAIÚSCULO `)