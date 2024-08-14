console.log('Hello world!')

// * Variables

cajita = 'moneda'
//  ! camelCase

 miPrimeraPalabra = 'Hola'

//  ! palabras reservadas
let return = 123;
console.log(return);

//* scope


var
var c = 123;

{
    var d = 1;
    console.log(c+d);

}

console.log(c+d);
let

let a = 2;
let d = 1;
{
    console.log(a+d);

}
console.log(a+d);

const
const b = 123123;

console.log(b);

//! inicializando variables

//* numerico

let numero1 = 123;
let numero2 = -Infinity;

/// (-123123/0)

let numero3 = NaN; // Not a Number

// 123132 * 'asdasd'
console.log(123123 / 'asdasd') // concatenacion

//* String

"" , '', ``

let cadena = "hola";
let cadena2 = 'hola';

console.log(cadena2);

let miNombre = 'alan';
alert('ASDASD')
let miNombre = prompt('Cual es tu nombre?')
// console.log(Number(numero) + 1);
let backStrips = `Hola como estas ${miNombre}`
console.log(backStrips)

//* boolean

let a = true; // 1
let B = false; // 0

//* null

let a = null; // 0

//* undefined
let m;
let b = undefined; // 0

//! operadores logicos 

//* AND

let a = ( null  && 2 && 8);

console.log(a)

//* Or || (o)

let a = ( 1  || undefined || 8);

console.log(a)

//* not

let bool = false;
console.log(!bool)

//! operadores de Comparacion

//* ==

console.log(12 == true) // = =

//* ==

console.log(12 === true) // = = =

//* != 
console.log(12 != 12) //   ! =
         number  String

//* !==
console.log(12 !== 'Hola') //   ! =
//* < , >= , <=, > 
console.log(14 < 14);
console.log(14 >= 14);
// ----------------->


//! condicional (if)

//* if

let a = 12;
let b = 11;
true       // true   // true
    let a = prompt('Cuantos años tenes?')
if (a > 100) {
    console.log(`Felicidades ${a}`);
}else if(a > 80){
    console.log(`Felicidades ${a} `);
}else{
    console.log(`Felicidades  `);
}

//! ciclos

//* while 
while (a <= 10) { // 1 ... /10
 let a = 0;

    console.log(a);
    a = a+1;
}

    //* do while

do{
    console.log(a);
    a = a+1;
}while(a < 10)

    //* for

for (let index = 0; index <= 10; index + 1) {
    // const element = array[index];
    console.log(index);
}
while(true){
    confirm
}

for (let a = 0; a <= 10; a++) {
  // const element = array[a];
  console.log(a);
}

console.log(index);

//* switch
let a = prompt('Un numero'); // string
switch (Number(a)) {
  case 12:
    console.log("La variable es 12");
    break;

  case 13:
    console.log("La variable es 13");
    break;

  case 15:
    console.log("La variable es 15");
    break;

  default:
    console.log('asdsdasd')
    break;
}

//! proyectos
//////////////////////////////// 
// ! FizzBuzz

    console.log
    while
     numero / 3    Fizz
     numero / 5    Buzz
    let numero = 1   
    while(numero <= 100){ // 3
       //15      //true         // And     // true
        if (((numero % 3) == 0) && ((numero % 5) == 0)){
        console.log('FizzBuzz')
        }else if ((numero % 3) == 0) { // true // false
            console.log('Fizz');
        }else if ((numero % 5) == 0){
            console.log('Buzz');
        }else {
            console.log(numero);
        }
        numero++; //  numero = numero + 1 , -- ,++numero, --numero
    }

///////////////////////////////////

    // tomate // 7 bs
    // harina //12 bs
    // diesel // 15 bs
    // chupete  // 1 bs 


    // prompt 
    // if 
    // console.log

    let precioTomate = 7;

    let nombreUsuario = prompt('Cual es tu nombre');
    let plataDeAlan = prompt('Cuanta plata tenes?');

    let concatenar = ' asdasd'+'asdasd'

    if (plataDeAlan >= 15 ) {
        console.log(`${nombreUsuario} con ${plataDeAlan} te podes comprar diesel`);
    }else if(plataDeAlan >= 12 ){
        console.log(`${nombreUsuario} con ${plataDeAlan} te podes comprar harina`);
    }else if(plataDeAlan >= precioTomate ){
        console.log(`${nombreUsuario} con ${plataDeAlan} te podes comprar tomate, el precio del tomate  ${precioTomate}, te quedarias con ${plataDeAlan - precioTomate}`);
    }else if(plataDeAlan >= 1 ){
        console.log(`${nombreUsuario} con ${plataDeAlan} te podes comprar chupete`);
    }else {
        console.log('andate de aqui POBRE');
    }


    //* ciclo de un triangulo 

    // while /  for / do while
    // concatenar 
    // if / if else / 
    






