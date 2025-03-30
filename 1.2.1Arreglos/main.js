const numbers = [9,3,5,6,7,2];

console.log(numbers);

//numbers.sort();

//console.log(numbers);

const copyofNumbers = [...numbers];

console.log(copyofNumbers);

let nombres = ["Diego", "Ana", "Lalo"]

console.log(nombres);

//nombres = [true, false, null];

console.log(nombres);

for(let i = 0; i < nombres.length; i++){
   console.log(nombres.i);
}

for(let nombre of nombres){
    console.log(nombre);
}

const persona = {
    nombre: "diego",
    edad: 21
}

console.log(persona);

const claveObjeto = Object.keys(persona);

console.log(claveObjeto);

const frutas = ["Manzana", "fresa", "Mango"];

const mifrutafavorita = frutas.find((Element) => Element === "Mango");

console.log(mifrutafavorita);

frutas.shift();

frutas.unshift("pera");

console.log(frutas);

frutas.pop()

frutas.push("sandia");

console.log(frutas, frutas.length);



const numbers2 = [1,3,6,8];

//const doubles = numbers2.map((item) => item *2);

const doubles = numbers2.map((item, index) => {
    const doubleNumber = item * 2;
    console.log(`El numero $(item) en el indice: $(index) al multiplicarlo por 2 su resultado es $(doubleNumer)`);
    return doubleNumber;
})

console.log(double);

const fiteredNumbers = numbers2.filter((element) => element % 2 === 0);

console.log(fiteredNumbers);






