// =============================
// ! 30 Exemplos com Arrays em JS
// =============================

// Exemplo 1 - Criando array
let arr1 = [1, 2, 3];
console.log("Exemplo 1 ->", arr1);

// Exemplo 2 - Acessando elementos
console.log("Exemplo 2 -> Primeiro:", arr1[0]);

// Exemplo 3 - Modificando elemento
arr1[1] = 10;
console.log("Exemplo 3 ->", arr1);

// Exemplo 4 - Tamanho do array
console.log("Exemplo 4 -> Tamanho:", arr1.length);

// Exemplo 5 - Loop for
const array1 = [1, 2, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array1.length; i++) {
  console.log("Exemplo 5 ->", array1[i]);
}

// Exemplo 6 - for...of
arr1 = [1,2,3,4,5]
for (let valor of arr1) {
  console.log("Exemplo 6 ->", valor);
}

// Exemplo 7 - forEach
arr1.forEach((valor, i) => console.log("Exemplo 7 ->", i, valor));

// Exemplo 8 - push
arr1.push(99);
console.log("Exemplo 8 ->", arr1);

// Exemplo 9 - pop
arr1.pop();
console.log("Exemplo 9 ->", arr1);

// Exemplo 10 - shift
arr1.shift();
console.log("Exemplo 10 ->", arr1);

// Exemplo 11 - unshift
arr1.unshift(0);
console.log("Exemplo 11 ->", arr1);

// Exemplo 12 - includes
console.log("Exemplo 12 -> Contém 10?", arr1.includes(10));

// Exemplo 13 - indexOf
console.log("Exemplo 13 -> Índice do 10:", arr1.indexOf(10));

// Exemplo 14 - slice
let arr2 = [1, 2, 3, 4, 5];
console.log("Exemplo 14 -> slice(1,3):", arr2.slice(1, 3));

// Exemplo 15 - splice
arr2.splice(2, 1);
console.log("Exemplo 15 -> splice remove:", arr2);

// Exemplo 16 - concat
let arr3 = [6, 7];
console.log("Exemplo 16 -> concat:", arr2.concat(arr3));

// Exemplo 17 - spread
let arr4 = [...arr2, ...arr3];
console.log("Exemplo 17 -> spread:", arr4);

// Exemplo 18 - map
let dobrado = arr4.map((n) => n * 2);
console.log("Exemplo 18 -> map:", dobrado);

// Exemplo 19 - filter
let pares = arr4.filter((n) => n % 2 === 0);
console.log("Exemplo 19 -> filter pares:", pares);

// Exemplo 20 - reduce
let soma = arr4.reduce((acc, n) => acc + n, 0);
console.log("Exemplo 20 -> reduce soma:", soma);

// Exemplo 21 - every
console.log(
  "Exemplo 21 -> Todos > 0?",
  arr4.every((n) => n > 0)
);

// Exemplo 22 - some
console.log(
  "Exemplo 22 -> Algum > 5?",
  arr4.some((n) => n > 5)
);

// Exemplo 23 - find
console.log(
  "Exemplo 23 -> Primeiro > 3:",
  arr4.find((n) => n > 3)
);

// Exemplo 24 - findIndex
console.log(
  "Exemplo 24 -> Índice do primeiro > 3:",
  arr4.findIndex((n) => n > 3)
);

// Exemplo 25 - reverse
let arr5 = [1, 2, 3];
arr5.reverse();
console.log("Exemplo 25 -> reverse:", arr5);

// Exemplo 26 - sort numérico
let arr6 = [5, 2, 9, 1];
arr6.sort((a, b) => a - b);
console.log("Exemplo 26 -> sort crescente:", arr6);

// Exemplo 27 - join
console.log("Exemplo 27 -> join:", arr6.join("-"));

// Exemplo 28 - flat
let arr7 = [1, [2, 3], [4, [5]]];
console.log("Exemplo 28 -> flat:", arr7.flat(2));

// Exemplo 29 - Array.from
let arr8 = Array.from("JS");
console.log("Exemplo 29 -> Array.from:", arr8);

// Exemplo 30 - Array fill
let arr9 = new Array(5).fill(0);
console.log("Exemplo 30 -> fill:", arr9);
