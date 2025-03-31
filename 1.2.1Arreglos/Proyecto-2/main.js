// 1. Crea un arreglo vacío llamado listaDeCompras.
let listaDeCompras = [];


// 2. Implementa una función agregarProducto(producto) que agregue un nuevo producto al final de la lista.

const agregarProducto = (producto) => {
  if (!listaDeCompras.includes(producto)) {
    listaDeCompras.push(producto);
    console.log(`"${producto}" agregado a la lista.`);
  } else {
    console.log(`"${producto}" ya está en la lista.`);
  }
};

// 3. Implementa una función eliminarProducto(producto) que elimine un producto de la lista.
const eliminarProducto = (producto) => {
  const indice = listaDeCompras.indexOf(producto);
  if (indice !== -1) {
    listaDeCompras.splice(indice, 1);
    console.log(`"${producto}" eliminado de la lista.`);
  } else {
    console.log(`"${producto}" no se encontró en la lista.`);
  }
};

// 4. Implementa una función mostrarLista() que imprima todos los productos de la lista.
const mostrarLista = () => {
  if (listaDeCompras.length === 0) {
    console.log("La lista de compras está vacía.");
  } else {
    console.log("Lista de compras:");
    listaDeCompras.forEach((producto, indice) => {
      console.log(`${indice + 1}. ${producto}`);
    });
  }
};

// Ejemplos
agregarProducto("Pera");
agregarProducto("Guayaba");
agregarProducto("Sardina");
agregarProducto("Atun"); // Intento de duplicado

mostrarLista();

eliminarProducto("Pera");
eliminarProducto("Huevos"); // Producto no existente

mostrarLista();


//Codigo generado con ayuda de IA