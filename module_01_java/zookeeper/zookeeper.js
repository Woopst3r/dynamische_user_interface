let poten_giraffen = parseInt(prompt("Hoeveel Giraffen zijn er?"));
let poten_struisvogel = parseInt(prompt("Hoeveel struisvogels zijn er?"));
let poten_zebras = parseInt(prompt("Hoeveel zebras zijn er?"));

const Giraffen = 4;
const Struisvogels = 2;
const Zebras = 4;

let antwoord = poten_zebras * Zebras + poten_struisvogel * Struisvogels + poten_giraffen * Giraffen;
document.getElementById("antwoord").innerText = antwoord;
console.log(antwoord);