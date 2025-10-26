// 1
const frutas = ["maçã", "banana"];
frutas.push("laranja");
console.log(frutas);

// 2.
let numeros = [1, 2, 3, 4];
numeros.pop();
console.log(numeros);

// 3.
let animais = ["gato", "cachorro"];
animais.unshift("pássaro");
console.log(animais);

// 4
let cores = ["vermelho", "verde", "azul"];
console.log(`Cores originais: ${cores}`);
novoArray = cores.shift(0);
console.log(cores);
console.log(novoArray);

// 5
let carros = ["Fiat", "Ford", "Chevrolet"];
carros.splice(1, 0, "Volkswagen");
console.log(carros);

// 6
let letras = ["a", "b", "c", "d", "e"];
let novoArray = letras.splice(1, 3);
console.log(novoArray);

// 7
const num = [10, 20, 30, 40, 50];
num.forEach((num) => console.log(num * 2));

// 8
const idade = [12, 14, 18, 25, 30];
const arrayIdade = idade.filter((i) => i >= 18);
console.log(arrayIdade);
const arrayIdades = idade.map((i) => i * 2);
console.log(arrayIdades);
