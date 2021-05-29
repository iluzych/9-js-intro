function dvigubinu(list) {
    const dvigubasSarasas = [];

    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        dvigubasSarasas.push(item * 2)
    }

    return dvigubasSarasas;
}

module.exports = dvigubinu;

// IKLIJUOTI I index.js norint pamatyti kaip veikia

// const dvigubinu = require('./js/23-map');

// const ilgiai = [1, 2, 3, 4, 5];

// const duIlgiai = dvigubinu(ilgiai);
// console.log(ilgiai);
// console.log(duIlgiai);

// const trysIlgiai = ilgiai.map(item => item * 3);
// console.log(trysIlgiai);

// const sesiApvalusIlgiai = ilgiai.map(x => Math.round(x * 6 / 10) * 10);
// console.log(sesiApvalusIlgiai);

// const zodynas = ['labas', 'rytas', 'sakau', 'tau'];
// const pirmosZodynoRaides = zodynas.map(word => word[0].toUpperCase());
// console.log(pirmosZodynoRaides);