const suma = function(a, b) {
    return a + b;
}

//const suma = (a,b) => a + b;

const generarMensajeSaludo = (nombre) => "Hola" + nombre;

console.log(generarMensajeSaludo("Diego"));
//=> significa que es una funcion o te retorna algo, es un return implicito


const array = [1,2,3,4,5,6,7,8,9];

const newarray = array.map((ClipboardItem, index) => {
    return item + 1;
})

newarray.forEach((item) => {
    console.log(item);
})

/*const midiv = document.querySelector(".mi-div");
midiv.insertAdjacentHTML("beforeend", `
    <p>Este elemento a sido insertado utilizando JS</p>
`)*/

const midiv = document.querySelector(".mi-div");
midiv.insertAdjacentHTML("beforeend", `
    <p>${array.map((item) => `$(item), `)}</p>
`)