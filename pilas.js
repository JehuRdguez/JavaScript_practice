
  //Creando la pila

//let pila = new Array();
let pila = [];

//Para insertar valores en la pila 
pila.push("Verde");
pila.push("Azul");
pila.push("Amarillo");
pila.push("Rojo");
pila.push("Negro");
pila.push("Blanco");

//console.log(pila.join(" | "));
//imprimePila(pila);

//console.log("Valor a Extraer: " + pila.pop());

//console.log(pila.join(" | "));
//imprimePila(pila);

let color = prompt("Dime el nombre de un color:","Morado");

pila.push(color);


//imprimePila(pila);
//console.log(pila.join(" | "));

//extraerElementos(pila);
imprimePila(pila);
let item = prompt("Dime un color a buscar el arreglo:","Morado");
extraerElemento(pila,item);
//pila = [];
//imprimePila(pila);

function imprimePila(pila){
	if(pila.length > 0){
		for(let i = 0; i < pila.length ; i ++){
				console.log("pila[" + i + "] = " + pila[i]);
		}
	}else{
		alert("Pila Vacia");
	}
}

function extraerElemento(pila,elemento){
	let indice = pila.indexOf(elemento);
	if(indice > -1){
		//alert("Eliminar elemento:" + pilas.splice(indice,1)); 
		console.log(elemento + " se encuentra en la posición: " + indice);
	}else{
		console.log("El elemento " + elemento + ", NO se encuentra en el arreglo");
	}

	
}
