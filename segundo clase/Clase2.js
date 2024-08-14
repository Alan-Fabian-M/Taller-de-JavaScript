//* Function
//parametros   //Parámetros Básicos  //Parámetros por Defecto
function sumar(primerNumero , Hola = 3) {
  return primerNumero + Hola;
  console.log("Hola mundo"); // no se ejecutara
}

console.log(sumar(1, 2));

//parametros
function CallBack(mensaje, callBack) {
  callBack(mensaje);
}

CallBack("Hola mundo", (mensaje)=> console.log(mensaje));

//* Declaracion de funcion

function multiplicar(a,b){
    return a*b
}

//*Expresiones de Función

let sumar = function(a,b){
    return a + b;
}

console.log(sumar(1,2))

//! Arrow function

let sumar = (a,b)=>{  /// = >
    return a +b;
}

console.log(sumar(1,2))

///* diferencias

function contador(){
    this.contador = 0;
    setInterval(function(){
        this.contador++; // contador = contador +1;
        console.log(this.contador)
    },1000);
}
contador();

function contador(){
    this.contador = 0;
    setInterval(()=>{   
        this.contador++;
        console.log(this.contador)
    },1000);
}
contador();


// ()=> {

//     let contador = 1; 
//     console.log(this.contador)
// }


// function normalita(){
//     this.contador = 1; 
//     console.log(this.contador)
// } despues 


//* Arrray 

    // let variable = 1;
    // let variable = "String";
               //0    1 -3     2 -2    3 -1
    let array = [1,"String",true,123123,123,34234,,123,,123];
    console.log(array)

    // Listas
    // cola
    // pila
    // arbol 

    array.push("Hola")
    console.log(array)
    array.pop()
    console.log(array)


//* Objetos simples 

    // forma de crear

        // Usando `new Object()`
        let objeto = new Object();
        objeto.nombre = "Alan" ;
        objeto.edad = 80 ;// adicionar
        console.log(objeto);
        // {}
        let objeto = {
            nombre: "Alan",
            Edad:80,
        }
        console.log(objeto);
        // delete objeto.nombre; // eliminar
        console.log(objeto);
        objeto.nombre = "Alberto";
        console.log(objeto);
        
        //* POO

        class Perro{
            #edad;
            // color
            // raza
            // edad
            constructor(raza, color,edad, nombre = undefined){
                this.raza = raza;
                this.color =color;
                this.#edad = edad;
                this.nombre = undefined;
                // console.log(this.#edad);
            }
            // metodos
            //ladra
            //camina
            //come
            ladrar(){
                console.log("el perro ladro");
            }

            caminar(){
                console.log("el perro esta caminando");
            }
            // get y set ;

            get getEdad(){
                return this.#edad;
            }

            set setEdad(edad){
                this.#edad = edad;
            }
        }

        // class pitbull extends perro{
            
        // }

        class pug extends Perro{

            constructor(nombre,color, peso, altura){
                super(color, nombre);
                this.peso = peso;
                this.altura = altura;
            }

            peso(){
                return this.peso;
            }
            altura(){
                return this.altura;
            }
            // static
            static sumar(a,b){
                return a-b;
            }

        }
        // let perro = new pug("fifi", "rojo", 10, 45);
        console.log(pug.sumar(1,2))

        // let pug = new perro("pug", "rojo", 3);
        
        // console.log(pug.getEdad)
        // pug.setEdad = 4
        // console.log(pug.getEdad)

        pug.ladrar();

        //* proyecto 
        // clase personaje
        // instanciar heroe
        // instanciar villano
        // atributos: nombre, salud y fuerza
        // metodo: atacar

        // Crea un juego de rol simple donde los personajes pueden tener atributos como nombre, salud, y fuerza. Permite que los personajes se ataquen entre sí y muestra el estado de los personajes después de cada ataque.

    class personaje{

        #nombreClave;

        constructor(nombre, salud, fuerza, nombreClave){
            this.nombre = nombre;
            this.salud = salud;
            this.fuerza = fuerza;
            this.#nombreClave = nombreClave;
            this.arma = undefined;
        }

        set setArma(danhio){
            
        }

        vida(){
            return this.salud;
        }
        danhio(){
            return this.fuerza;
        }
            // villano o heroe
        atacar(objetivo){
            objetivo.salud = objetivo.salud - this.fuerza;
            console.log(`se ataco al objetivo y quedo con la saluld: ${objetivo.salud} y se causo un danhio de: ${this.fuerza}`)
        }
    }
    

    let heroe = new personaje("Arturo",100, 50, "Arturito" );
    let villano = new personaje("pepe", 120, 15, "Pepito");

    console.log(heroe.vida())
    console.log(villano.vida())

    heroe.atacar(villano);


    // proyecto 1 y 2

    class libro{
        constructor(titulo, autor, anhio){
            this.titulo = titulo;
        }
        mostrar(){
            console.log(`${this.titulo}`)
        }

    }
    class biblioteca{
        constructor(){
            this.libros = [];
        }
                    // libro
        adicionarLibro(libro){
            this.libros.push(libro);
        }
    }

    // find array;

    let array = [123,123,123,4234,1];


    array.find((array)=>array===4234)
        

