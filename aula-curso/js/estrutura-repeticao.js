// =============================
// ! Exemplos de Laços em JS
// ! for, while e do...while
// =============================

// -----------------------------
// ? Parte 1 – Exemplos com FOR

// Exemplo 1 - for simples
for (let i = 1; i <= 5; i++) {
  console.log("Exemplo 1 ->", i);
}

// Exemplo 2 - for decrescente
for (let i = 5; i >= 1; i--) {
  console.log("Exemplo 2 ->", i);
}

// Exemplo 3 - somando números
let soma = 0;
for (let i = 1; i <= 5; i++) {
  soma += i;
}
console.log("Exemplo 3 -> Soma =", soma);

// Exemplo 4 - percorrendo array
let frutas = ["maçã", "banana", "uva"];
for (let i = 0; i < frutas.length; i++) {
  console.log("Exemplo 4 ->", frutas[i]);
}

// Exemplo 5 - pares até 10
for (let i = 2; i <= 10; i += 2) {
  console.log("Exemplo 5 ->", i);
}

// Exemplo 6 - ímpares até 10
for (let i = 1; i <= 10; i += 2) {
  console.log("Exemplo 6 ->", i);
}

// Exemplo 7 - tabuada do 5
for (let i = 1; i <= 10; i++) {
  console.log("Exemplo 7 -> 5 x", i, "=", 5 * i);
}

// Exemplo 8 - fatorial de 5
let fatorial = 1;
for (let i = 1; i <= 5; i++) {
  fatorial *= i;
}
console.log("Exemplo 8 -> Fatorial de 5 =", fatorial);

// Exemplo 9 - for aninhado
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log("Exemplo 9 -> i:", i, "j:", j);
  }
}

// Exemplo 10 - string invertida
let palavra = "javascript";
let invertida = "";
for (let i = palavra.length - 1; i >= 0; i--) {
  invertida += palavra[i];
}
console.log("Exemplo 10 ->", invertida);

// -----------------------------
// ? Parte 2 – Exemplos com WHILE
// -----------------------------

// Exemplo 11 - contagem crescente
let a = 1;
while (a <= 5) {
  console.log("Exemplo 11 ->", a);
  a++;
}

// Exemplo 12 - contagem decrescente
let b = 5;
while (b > 0) {
  console.log("Exemplo 12 ->", b);
  b--;
}

// Exemplo 13 - soma até 100
let c = 1,
  soma2 = 0;
while (c <= 100) {
  soma2 += c;
  c++;
}
console.log("Exemplo 13 -> Soma até 100 =", soma2);

// Exemplo 14 - pares até 20
let d = 2;
while (d <= 20) {
  console.log("Exemplo 14 ->", d);
  d += 2;
}

// Exemplo 15 - percorrendo array
let carros = ["Fiat", "VW", "Ford"];
let i = 0;
while (i < carros.length) {
  console.log("Exemplo 15 ->", carros[i]);
  i++;
}

// Exemplo 16 - procurando número
let numeros = [3, 7, 10, 15];
let j = 0,
  achou = false;
while (j < numeros.length) {
  if (numeros[j] === 10) {
    achou = true;
    break;
  }
  j++;
}
console.log("Exemplo 16 -> Achou 10?", achou);

// Exemplo 17 - tabuada do 3
let k = 1;
while (k <= 10) {
  console.log("Exemplo 17 -> 3 x", k, "=", 3 * k);
  k++;
}

// Exemplo 18 - fatorial de 6
let l = 1,
  fat = 1;
while (l <= 6) {
  fat *= l;
  l++;
}
console.log("Exemplo 18 -> Fatorial de 6 =", fat);

// Exemplo 19 - número primo
let num = 17;
let div = 2;
let primo = true;
while (div < num) {
  if (num % div === 0) {
    primo = false;
    break;
  }
  div++;
}
console.log("Exemplo 19 -> Primo?", primo);

// Exemplo 20 - countdown com while
let tempo = 5;
while (tempo > 0) {
  console.log("Exemplo 20 -> Faltam", tempo, "segundos");
  tempo--;
}
console.log("Exemplo 20 -> Tempo esgotado!");

// -----------------------------
// ? Parte 3 – Exemplos com DO WHILE
// -----------------------------

// Exemplo 21 - executa pelo menos 1 vez
let m = 1;
do {
  console.log("Exemplo 21 ->", m);
  m++;
} while (m <= 3);

// Exemplo 22 - senha até acertar
let senhaDigitada = "1234";
do {
  console.log("Exemplo 22 -> Tentando senha:", senhaDigitada);
  senhaDigitada = "0000"; // simulação de erro
} while (senhaDigitada !== "senhaCerta");

// Exemplo 23 - contagem crescente
let n = 1;
do {
  console.log("Exemplo 23 ->", n);
  n++;
} while (n <= 5);

// Exemplo 24 - contagem decrescente
let o = 5;
do {
  console.log("Exemplo 24 ->", o);
  o--;
} while (o > 0);

// Exemplo 25 - soma até 10
let p = 1,
  soma3 = 0;
do {
  soma3 += p;
  p++;
} while (p <= 10);
console.log("Exemplo 25 -> Soma até 10 =", soma3);

// Exemplo 26 - pares até 10
let q = 2;
do {
  console.log("Exemplo 26 ->", q);
  q += 2;
} while (q <= 10);

// Exemplo 27 - tabuada do 7
let r = 1;
do {
  console.log("Exemplo 27 -> 7 x", r, "=", 7 * r);
  r++;
} while (r <= 10);

// Exemplo 28 - fatorial de 4
let s = 1,
  fat2 = 1;
do {
  fat2 *= s;
  s++;
} while (s <= 4);
console.log("Exemplo 28 -> Fatorial de 4 =", fat2);

// Exemplo 29 - percorrendo array
let linguagens = ["JS", "Python", "Java"];
let t = 0;
do {
  console.log("Exemplo 29 ->", linguagens[t]);
  t++;
} while (t < linguagens.length);

// Exemplo 30 - jogo de tentativas
let tentativa = 0;
let numeroSecreto = 7;
let chute;
do {
  chute = Math.floor(Math.random() * 10) + 1;
  tentativa++;
  console.log("Exemplo 30 -> Tentativa", tentativa, ":", chute);
} while (chute !== numeroSecreto);
console.log("Exemplo 30 -> Acertou em", tentativa, "tentativas!");
