//hay dos tipos. 

//expresiones regulares directas, o con el objeto RegExp

//Expresiones regulares directas; 

let expRegular00=/expresion-regular/[claves]
let exprRegular01= new RegExp ("expresion-regular"["Claves"])
/* 
claves 
  i-->  No hace distincion entre mayus y minus

  caracteres con significado:
        . --> un caracter cualquiera

        caracter1 | caracter2 --> o bien el C1 o el C2 
            a|e|i|o|u --> una vocaL
        [lista-caracteres] --> un único caracter. SOLO ESE. Su valor podra ser cualquiera de los indicados.
         [AEIOU] --> Una unica Vocal.
        [caracter1-caracter2] --> Un UNICO CARACTER, comprendido entre un rango de caracteres
         [A-Z] --> cualquier letra 
         [a-záéíóúüñ] --> cualquier letra del alfabeto español

        \d-un digito
        \D-un caracter uqe no sea digito
        \s un caracter indicidual de espacio en blanco
        \Sun caracter individual qeu no sea en blanco
        \w un caracter alfanumerico 
        \W un caracter no alfanumerico
        \b caracter de limte de palabra
        \B caracter que no sea limete de palabra
        ^ - inicio de entrada 
        $fuinal de entrada
        REPETICIONES
        *de 0 a n veces
        + de 1 a n veces
        ? una o ninguna
        {numero} ese numero de veces
        {numero 1, numero 2} -->
  */