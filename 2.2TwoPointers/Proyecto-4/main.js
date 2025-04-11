const invitados = ["Karina", "Karen", "Cecilia", "Carlos", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {

        const inicial1 = arr[inicio].charAt(0).toUpperCase();
        const inicial2 = arr[siguiente].charAt(0).toUpperCase();

        if (inicial1 === inicial2) {
            return [arr[inicio], arr[siguiente]];
        }

        inicio++;
        siguiente++;
    }

    return null; 
}

console.log(encontrarPareja(invitados));
