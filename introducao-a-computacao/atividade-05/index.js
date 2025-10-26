// ! Questão 1
let filmes = ["Matrix", "Avatar"];
filmes.push("Interstellar");
console.log("Questão 1:", filmes);

// ! Questão 2
let numeros = [10, 20, 30, 40, 50];
numeros.pop();
console.log("Questão 2:", numeros);

// ! Questão 3
let frutas = ["maçã", "banana"];
frutas.unshift("uva");
console.log("Questão 3:", frutas);

// ! Questão 4
let linguagens = ["HTML", "CSS", "javaScript", "python"];
linguagens.shift();
console.log("Questão 4:", linguagens);

// ! Questão 5
let carros = ["fiat", "ford", "honda"];
carros.splice(1, 1, "toyota");
console.log("Questão 5:", carros);

// ! Questão 6
let letras = ["a", "b", "c", "d", "e"];
let letrasSelecionadas = letras.slice(1, 4);
console.log("Questão 6:", letrasSelecionadas);

// ! Questão 7
let numeros2 = [45, 12, 8, 32, 19];
numeros2.sort((a, b) => a - b);
console.log("Questão 7:", numeros2);

// ! Questão 8
let notas = [5.5, 7.0, 8.2, 4.9, 9.5];
let notasAprovadas = notas
  .filter((nota) => nota > 6)
  .map((nota) => Math.round(nota));
console.log("Questão 8:", notasAprovadas);
