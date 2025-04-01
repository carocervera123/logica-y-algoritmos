//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Television", precio: 2000, categoria: "Electronica" },
    { nombre: "Cama", precio: 800, categoria: "Muebles" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

//Usa filter() para obtener los productos que cuesten menos de $100.
const filteredProductos = productos.filter((element) => element.precio <= 100);
console.log(filteredProductos);

//Usa sort() para ordenar esos productos alfabéticamente por su nombre.
const SortProductos = productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(SortProductos);


//Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
const nombresProductos = productos.map(element => element.nombre);
console.log(nombresProductos);


//(Oppcional) Incluye alguno de los métodos faltantes (reduce, some, every, includes, etc.) con algún caso de uso en este ejemplo, usa tu creatividad.

const ProductoConC = productos.some(element => element.nombre.toLowerCase().includes("C"));
console.log(ProductoConC);

const muebleEncontrado = productos.find(element => element.categoria === "Muebles");
console.log(muebleEncontrado);