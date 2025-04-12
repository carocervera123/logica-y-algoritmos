// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];


function findGift(gifts, giftName, index = 0) {

    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    if (gifts[index] === giftName) {
        return `¡Encontré "${giftName}" en la posición ${index}! ¡Alguien será muy feliz!`;
    }

    return findGift(gifts, giftName, index + 1);
}


// Casos de ejemplo:

let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));



let giftToFind2 = "Camión";
console.log(findGift(gifts, giftToFind2));
