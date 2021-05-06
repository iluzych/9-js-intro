/*
Duotas array su tekstinemis reiksmemis (string)
Reikia sujungti juos atbulai iterpiant ", "
*/

// labas, rytas, tau, sakau
const d = ['sakau', 'tau', 'rytas', 'labas'];
let reverse = '';

// reverse = dictionary[3];
// reverse += ', ';
// reverse = dictionary[2];
// reverse += ', ';
// reverse = dictionary[1];
// reverse += ', ';
// reverse = dictionary[0];

// reverse = d[3] + ', ' + d[2] + ', ' + d[1] + ', ' + d[0];

reverse = `${d[3]}, ${d[2]}, ${d[1]}, ${d[0]}`;
console.log(reverse);

const d2 = [...d];
const jras = d2.reverse().join(', ');

console.log(jras);