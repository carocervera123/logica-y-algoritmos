//Código Inicial
//viajes.js
//Array para guardar los destinos

const destinos = [];

//Función para registrar un destino de viaje
const registrarDestino = (destino, fecha, transporte) => {
    //TODO: Crear un objeto con los datos del destino
    let nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte) => {
    let costoBase = 0;

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Francia") {
        costoBase = 600;
    } else if (destino === "Inglaterra") {
        costoBase = 300;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    } else if (transporte === "Autobus") {
        costoBase += 50;
    }

    return costoBase;
}

//Función para mostrar el itinerario de los viajes registrados
const mostrarItinerario=() => {
//TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    for (let i = 0; i < destinos.length; i++) {
        let viaje = destinos[i];
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Costo: $" + viaje.costo);
        console.log("---------------------------");
    }
}

// app.js

// Iniciar la aplicación
const iniciarApp=() => {
//Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");
    registrarDestino("Inglaterra", "2024-08-01", "Autobus");
    registrarDestino("Francia", "2024-09-18", "Avión");
    registrarDestino("New York", "2024-10-01", "Tren");

// Mostrar el itinerario de los viajes
 mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();
