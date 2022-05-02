let Pessoas=["Ana","Amanda","Antonio","Aline","Claudia","Carlos","Camila","Chay","Gïøvane","Gabriela","Diego","Daniela","Daniel","Diogo"]

// VETOR COM NOMES QUE COMEÇA COM A LETRA A
 
 function Pessoas_Com_Letra_A(Pessoas){
   return Pessoas.startsWith("A")
 }
 
 const PESSOAS_COM_LETRAA=Pessoas.filter(Pessoas_Com_Letra_A)
 console.log(PESSOAS_COM_LETRAA)
 
 // VETOR COM PESSOA QUE COMEÇA COM A LETRA Gabriela
 
 function Pessoas_Com_Letra_G(Pessoas){
   return Pessoas.startsWith("G")
 }
 
 const PESSOAS_COM_LETRAG=Pessoas.filter(Pessoas_Com_Letra_G)
 console.log(PESSOAS_COM_LETRAG)
 
 // VETOR COM NOME QUE  COMEÇA COM A LETRA D 
 
 function Pessoas_Com_Letra_D(Pessoas){
   return Pessoas.startsWith("D")
 }
 
 const PESSOAS_COM_LETRAD=Pessoas.filter(Pessoas_Com_Letra_D)
 console.log(PESSOAS_COM_LETRAD)
 
 // VETOR DE PESSOAS QUE  COMEÇA COM LETRA C
 
 function Pessoas_Com_Letra_C(Pessoas){
   return Pessoas.startsWith("C")
 }
 const PESSOAS_COM_LETRAC=Pessoas.filter(Pessoas_Com_Letra_C)
 console.log(PESSOAS_COM_LETRAC)