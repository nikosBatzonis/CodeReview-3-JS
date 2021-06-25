"use-strict";

const calculateInvoice = (
    starterPrice,
    maindishPrice,
    dessertPrice,
    beveragePrice
) => {
    let totalAmount = starterPrice + maindishPrice + dessertPrice + beveragePrice;
    return totalAmount;
};
console.log(calculateInvoice(4.5, 12.9, 5, 4));

const tzatziki = 2.5;
const kokinisto = 11.5;
const kadaifi = 5;
const cola = 2;

console.log(calculateInvoice(tzatziki, kokinisto, kadaifi, cola));

//invoice 1
const melitzanosalata = 2.5;
const gemista = 9.5;
const revani = 5;
const wine = 10;

console.log(
    `invoice 1: ${calculateInvoice(melitzanosalata, gemista, revani, wine)}`
);

//invoice 2
const horiatiki = 4.5;
const musaka = 12.9;
const baklavas = 5;
const beer = 4;

console.log(
    `invoice 2: ${calculateInvoice(horiatiki, musaka, baklavas, beer)}`
);

//invoice 3
const dolmadakia = 3.5;
const guros = 6.5;
const galaktobureko = 5;
const ouzo = 6;

console.log(
    `invoice 3: ${calculateInvoice(dolmadakia, guros, galaktobureko, ouzo)}`
);

// Bonus

const studentInvoice = (
    starterPrice,
    maindishPrice,
    dessertPrice,
    beveragePrice
) => {
    let discount = ((starterPrice + maindishPrice + dessertPrice) * 10) / 100;
    let totalAmount =
        starterPrice + maindishPrice + dessertPrice - discount + beveragePrice;

    return totalAmount;
};

console.log(
    `Bonus studentInvoice 1: ${studentInvoice(
    melitzanosalata,
    gemista,
    revani,
    wine
  )}`
);

console.log(
    `Bonus studentInvoice 2: ${studentInvoice(
    horiatiki,
    musaka,
    baklavas,
    beer
  ).toFixed(1)}`
);

console.log(
    `Bonus studentInvoice 3: ${studentInvoice(
    dolmadakia,
    guros,
    galaktobureko,
    ouzo
  )}`
);