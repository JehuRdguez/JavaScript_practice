//console.log("Hola desde JavaScript"); //- Imprime en consola

//alert("Hola desde JavaScript"); //- Mensaje del "Servdor web" al usuario

//var i = confirm("Hola desde Javascript"); //- Un mensaje que retorna un valor booleano
//alert("Opción seleccionada: "+i)

//var i = prompt("Dime tu nombre:", null); //- Envia un mensaje para recuperar texto del teclado
//alert("Opción seleccionada: "+i)

/*var numero = prompt("Cantidad de impresiones en consola: ", ); 
var j = 0;
for(let i = 0; i < numero; i++){
    console.log("\n" + i);
    alert("\n" + i);
    if(confirm("\n"+1)){
        i++;
    }
    j++;
}

console.log("El número se imprimió "+ numero +" de veces.");*/

// VAR, LET, CONST

// VAR

/*i = 12; //declarando una variable global sin var
function suma(){
    i = 10;
    console.log("Valor de i dentro de la funcion: " + i);

    i = 35;
}
suma();
console.log("Valor de i fuera de la funcion: " + i);

var j = 2; //declarando una variable global con var
function suma2(){
    j = 1;
    console.log("Valor de i dentro de la funcion: " + j);

    j = 35;
}
suma2();
console.log("Valor de i fuera de la funcion: " +j);*/

/*
var j = 2; //declarando una variable global con var
function suma2(){
    
    j = 1; //declarando variable local
    console.log("Valor de i dentro de la funcion: " + j);

    j = 35;
}
suma2();
console.log("Valor de i fuera de la funcion: " +j);
*/

//LET nos ayuda a no repetir nombres de variables al mismo nivel (global o local);
/*var nombre = "Juan";
let apellido = "Fernández";

console.log("Nombre: " + nombre);
console.log("Apellidos: " + apellido);

nombre = "Pedro";
apellido = "González";


console.log("Nombre: " + nombre);
console.log("Apellidos: " + apellido);

//let j = 2; // declarando una variable global con let  j -> 2 /global
var j = 2; // declarando una variable global con var  j -> 2 /global
function suma2(){
    for(j = 0; j < 10; j++){
        console.log(" Valor de j dentro de la función: " + j );	//10 - Milton
    } //declarando variable local j -> 1 /local
}
    suma2();
    console.log(" Valor de j fuera de la función: " + j );	//35 - Reinaldo*/

/*var nombre = "Juan";
let apellido = "Fernández";
 
console.log("Nombre: " + nombre);
console.log("Apellidos: " + apellido);
 
//var nombre = "Pedro";
//let apellido = "González";
 
 
//console.log("Nombre: " + nombre);
//console.log("Apellidos: " + apellido);
 
 
leernombres();
 
function leernombres(){
 
    //let apellido = "González";
 
    var nombre = prompt("Dime tu Nombre: ");
    let apellido = prompt("Dime tu Nombre: ");
 
 
    var nombre = "Pedro";
 
 
    console.log("Nombre: " + nombre);
    console.log("Apellidos: " + apellido);
 
}
*/

//CONST - Deben ser inicializadas

/*
var edad = 12;
let edad1 = 25;
const edad2 = 45;

console.log(edad);
console.log(edad1);
console.log(edad2);

edad = 2;
edad1 = 45;
edad2 = 50;

console.log(edad);
console.log(edad1);
console.log(edad2);

function suma(){
    const edad2 = 67;
    console.log("/n" + edad2);
    console.log(edad1 + edad2);
}

suma();

var edad = "Treinta";
edad1 = "Cincuenta";

console.log(edad);
console.log(edad1);
*/

//con VAR se declaran variables, se pueden nombrar de la misma forma y re-declarar las variables en 
//el mismo nivel y cambiar contenido
//con LET se declaran variables, NO se pueden nombrar de la misma forma NI re-declarar las variables en 
//el mismo nivel pero si cambiar contenido
//con CONST se declara una sola vez la variable y no se puede cambiar contenido


/*

|  id   |  nomVar  | nivel  | function | value  |  type
#000001    edad      global    null       12       var
#000001    edad2     global    null      45       const
#004500    edad2     local     this.suma  67       const
#004522    edad      local    this.suma   34       let
#004522    edad      local    this.suma   34       let
*/


// -------------------------------------------12/10/2022---------------------------------------------------

//Arreglos van como tipo let
/*
let nombres = [];
console.log(nombres.length);

console.log(nombres[1]);

function imprimeArray(nombres){
    for(let i=0; i < nombres.length ; i++){
    alert("nombres[" + i + "] = " + nombres[i]);
}
}

let cantidad = prompt("¿Cuántos nombres se van a ingresar?(El valor tiene que ser >= 5): ");

function insertarArray(){
    for (let i = 0; i <= cantidad - 1; i++) {
        let nombre = prompt("Ingresa el nombre: ");
        nombres.push(nombre);
    }
}

if(cantidad>=5){
insertarArray();
} else {
    alert ("El valor ingresado no es valido");
}

imprimeArray(nombres);

//nombres[] = nombre;

// para insertar elementos en un arreglo push (elemento);



//IMPORTANTE****************


//alert("Elemento:" + nombres.pop()); //Extrae el último elemento del arreglo 
//y lo elimina


//alert("Primer elemento:" + nombres.shift()) //Extrae el primer elemento del arreglo 
//y lo elimina

//eliminar un elemento del arreglo de acuerdo a su posicion
// pos-> posicion del elemento
// elem-> cantidad de elementos a eliminar


nombre = prompt("Buscar un nombre:");;

let indice = nombres.indexOf(nombre);



if (indice > -1) {
    alert("El elemento: " + nombre + " se encuentra en el arreglo.");
    alert("Se va a eliminar el arreglo compuesto de: " + nombres.splice(nombre));
    //alert(nombre + " se encuentra en la posición: " + indice);
} else {
    alert("El nombre " + nombre + ", NO se encuentra en el arreglo");
}

imprimeArray(nombres);

alert(nombres.lenght);
*/

/*
Un objeto se define con características

{
    "attributo" : "valor";
}

Arreglo de objetos

[
{
    "attributo" : "valor";
},
{
    "attributo" : "valor";
}
]

*/

/*
 12/10/2022
 */
//métodos de ordenamiento de arrays sort()
//métodos de ordenamiento de arrays sort()
/*
const equipos = ['Real Madrid', 'Manchester Utd', 'Bayern Munich', 'Juventus'];
//const equipos = new Array ('Real Madrid', 'Manchester Utd', 'Bayern Munich', 'Juventus');

console.log("Elementos en equipos: \n");
//console.log(equipos);

//funcion join () para abregar, despues de cada item, caracteres

//console.log(equipos.join(" | \n")); //convierte array en cadena 
// ['Real Madrid', 'Manchester Utd', 'Bayern Munich', 'Juventus'] => Real Madrid | Manchester Utd | Bayern Munich | Juventus;
alert(equipos.join(" | \n"));

//Utilizando el método sort(), se ordenan en orden ascendente
//equipos = equipos.sort();
equipos.sort(); 

console.log("Elementos ordenados: \n");
console.log(equipos.join(" | "));*/



const numeros = [1,23,5,10,45,8];
const numeros1 = [1,23,5,10,45,8];

console.log("Elementos en numeros: \n");
console.log(numeros.join(" | "));

//Utilizando el método sort(), se ordenan en orden ascendente
numeros.sort(function(a, b){return a - b});

numeros1.sort();

console.log("Elementos ordenados: \n");
console.log("Con sort(): \n" + numeros1.join(" | "));
console.log("Con funcion de comparacion sort(): \n" +numeros.join(" | "));

