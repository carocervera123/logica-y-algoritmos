const letras = ["H", "O", "L", "A"];

let palabra = letras.reduce((palabra, letra) => palabra + letra);
console.log(palabra);

console.log(letras[0] + letras[1] + letras[2] + letras[3]);

let palabraFor = '';
for(let i=0; i < letras.length; i++) {
    palabraFor += letras[i];
}

console.log(palabraFor);

const tareas =[
{
    nombre: "lavar trastes",
    pendiente: true
},
{
    nombre: "Hacer tarea",
    pendiente: true
},
{
    nombre: "limpiar cuarto",
    pendiente: true
},
{
    nombre: "sacar la basura",
    pendiente: true
},
{
    nombre: "Estudiar JS",
    pendiente: true
}
]

let TodaslasTareasSonPendientes = tareas.every((tarea) => tarea.pendiente === true);
console.log(TodaslasTareasSonPendientes);


let resultado = true;
let elementoActual = tareas[0].pendiente;
for(let i = 1; i < tareas.length; i ++){
    if(elementoActual != tareas[i].pendiente){
        resultado = false;
    }
    elementoActual = tareas[i].pendiente
}

console.log(resultado);

function verificarAtributo(arr, key){
    let elementoActual = arr[0][key];
    for (let i = 1; i < arr.length; i++) {
        if(elementoActual != arr[i][key]){
            return false
        }
        elementoActual = arr[i][key];
    }
    return true;
}

console.log(verificarAtributo(tareas, "pendiente"));

const productos = [
    {
        nombre: "platano",
        precio: 20
    },
    {
        nombre: "platano",
        precio: 20
    },
    {
        nombre: "fresa",
        precio: 15
    },
    {
        nombre: "platano",
        precio: 20
    },
]

console.log(verificarAtributo(productos, "nombre"));

const incluyeO = letras.includes("o");

console.log(incluyeO);


const unaTareaCumplida = tareas.some((elemento) => elemento.pendiente === true);
console.log(unaTareaCumplida);


const carritoCompras = {
    productos: [],
    agregarProducto: function(producto){
        this.productos.push(producto.toLowerCase());
    },
    eliminarProducto: function(producto){
        let indiceDelProducto = this.productos.indexOf(producto.toLowerCase());
        if(indiceDelProducto === -1){
            console.log(`No se encontró ningun producto con el nombre ${producto}`);
            return;
        }
        this.productos.splice(indiceDelProducto, 1)
    },
    mostrarProductos: function(){
        this.productos.forEach((producto) => console.log(producto));
    }
}

carritoCompras.agregarProducto("Manzana");
carritoCompras.agregarProducto("Fresas");
carritoCompras.agregarProducto("Kiwi");

carritoCompras.mostrarProductos();

carritoCompras.eliminarProducto("Fresas");

carritoCompras.mostrarProductos();

carritoCompras.eliminarProducto("Platano");