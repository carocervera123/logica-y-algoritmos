const fs = require('fs');

// Ruta del archivo de notas
const filePath = './notas.json';

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */
function agregarNota(titulo, contenido) {
    let notas = [];
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        notas = JSON.parse(data);
    }

    const nuevaNota = { titulo, contenido };
    notas.push(nuevaNota);

    try {
        fs.writeFileSync(filePath, JSON.stringify(notas, null, 2), "utf-8");
        console.log('Nota agregada con éxito.');
    } catch (error) {
        console.error('Error al guardar el archivo de notas:', error);
    }
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf-8');
        const notas = JSON.parse(data);
        // PISTA: Debes leer y parsear el contenido del archivo.
        // COMPLETAR: Usa fs.readFileSync para leer y JSON.parse para convertir el contenido.
    } else {
        console.log('No hay notas guardadas.');
    }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
    try{
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        let notas = JSON.parse(data);
        const tituloReal = titulo - 1; // Ajustar el índice

        if (tituloReal >= 0 && tituloReal < notas.length) {
            const tituloEliminado = notas.splice(tituloReal, 1)[0];
            fs.writeFileSync(filePath, JSON.stringify(notas, null, 2), 'utf8');
            console.log(`nota "${tituloEliminado.titulo}" eliminada.`);
        } else {
            console.log('Titulo de nota inválido.');
        }
    } else {
        console.log('No hay titulos para eliminar.');
    }
} catch (error) {
    console.error('Error al leer o escribir el archivo de tareas:', error);
    console.log('No se pudieron eliminar las tareas.');
}
}



// Ejecución de ejemplo
//agregarNota('Compras', 'Comprar leche y pan.');
//listarNotas();
//eliminarNota('Compras');

// ### Pistas para Resolver el Proyecto ###
// Formato del archivo `notas.json`:
//[
  //  { "titulo": "Compras", "contenido": "Comprar leche y pan." },
    //{ "titulo": "Trabajo", "contenido": "Terminar reporte semanal." }
//]

// #### Operaciones clave: ###
// 1. Para leer las notas existentes:
//const data = fs.readFileSync(filePath, 'utf8');
//const notas = JSON.parse(data);

// 2. Para guardar las notas actualizadas:
//fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));

// 3. Filtrar notas para eliminar:
//const notasRestantes = notas.filter((nota) => notas.titulo !== titulo);

//Ejecución de ejemplo ---
console.log('--- Agregando tareas ---');
agregarNota('Hacer la compra');
agregarNota('Estudiar JavaScript', false);
agregarNota('Pasear al perro', true);

console.log('\n--- Listando tareas ---');
listarNotas();

console.log('\n--- Listando tareas actualizadas ---');
listarNotas();

console.log('\n--- Eliminando la segunda tarea ---');
eliminarNota(2);

console.log('\n--- Listando tareas después de la eliminación ---');
listarNotas();
