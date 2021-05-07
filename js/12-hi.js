/*
Reikia funkcijos, kuriai davus varda, grazintu pasisveikinimo teksta

pvz: labas, as esu Vardenis!
*/


// Vardenis -> labas, as esu Vardenis!
// Jonas -> labas, as esu Jonas!
// Maryte -> labas, as esu Maryte!

function hi(vardas) {
    return `Labas, as esu ${vardas}!`
}

const hiVardenis = hi('Vardenis');
console.log(hiVardenis);


const hiJonas = hi('Jonas');
console.log(hiJonas);

const hiMaryte = hi('Maryte');
console.log(hiMaryte);