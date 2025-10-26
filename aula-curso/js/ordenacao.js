// ! exemplos de uso do método sort()

// 1) Números: cuidado — sort() sem comparador ordena como strings
const nums = [10, 1, 5, 20, 2];
console.log("Original nums:", nums);
console.log("sort() padrão (lexicográfico):", [...nums].sort());

// Comparador para números (asc/desc)
const numsAsc = [...nums].sort((a, b) => a - b);
const numsDesc = [...nums].sort((a, b) => b - a);
console.log("Números asc:", numsAsc);
console.log("Números desc:", numsDesc);

// 2) Strings: ordem lexicográfica e com localeCompare (suporta acentuação/case)
const frutas = ["banana", "Maçã", "abacaxi", "Água"];
console.log("\nOriginal frutas:", frutas);
console.log("sort() padrão (case-sensitive/lex):", [...frutas].sort());
console.log(
  "Com localeCompare (respeita acentos e case options):",
  [...frutas].sort((a, b) => a.localeCompare(b, "pt", { sensitivity: "base" }))
);

// 3) Case-insensitive (outras opções)
const nomes = ["zoe", "Ana", "álvaro", "Bruno"];
const caseInsensitive = [...nomes].sort((a, b) =>
  a.toLowerCase().localeCompare(b.toLowerCase())
);
console.log("\nCase-insensitive:", caseInsensitive);

// 4) Arrays de objetos: ordenar por propriedade
const pessoas = [
  { nome: "Carlos", idade: 28 },
  { nome: "Ana", idade: 22 },
  { nome: "Bruno", idade: 28 },
  { nome: "Débora", idade: 22 },
];

// Ordenar por idade (ascendente)
const porIdade = [...pessoas].sort((a, b) => a.idade - b.idade);
console.log("\nPessoas por idade (asc):", porIdade);

// Ordenar por idade e, em caso de empate, por nome (estável/tiebreaker)
const porIdadeENome = [...pessoas].sort((a, b) => {
  const idadeDiff = a.idade - b.idade;
  if (idadeDiff !== 0) return idadeDiff;
  return a.nome.localeCompare(b.nome, "pt", { sensitivity: "base" });
});
console.log("Pessoas por idade e nome:", porIdadeENome);

// 5) Datas: comparar timestamps
const datas = [
  new Date("2024-01-10"),
  new Date("2023-12-31"),
  new Date("2024-01-01"),
];
const porData = [...datas].sort((a, b) => a.getTime() - b.getTime());
console.log("\nDatas ordenadas:", porData);

// 6) Evitar mutação: crie cópias antes de sort() se quiser preservar o original
const original = [3, 1, 2];
const copiaOrdenada = [...original].sort((a, b) => a - b);
console.log(
  "\nOriginal permanece:",
  original,
  "Cópia ordenada:",
  copiaOrdenada
);
