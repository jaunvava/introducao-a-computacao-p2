/*
 ! Exemplos de Estruturas de Decisão em JS
 ! Do mais simples ao mais complexo
*/

// -----------------------------
// ? Parte 1 – If simples

// Exemplo 1
let x = 10;
if (x > 5) {
  console.log("Exemplo 1 -> Maior que 5");
}

// Exemplo 2
let idade = 18;
if (idade >= 18) {
  console.log("Exemplo 2 -> Pode votar");
}

// Exemplo 3
let nome = "Ana";
if (nome === "Ana") {
  console.log("Exemplo 3 -> Olá, Ana!");
}

// Exemplo 4
let ativo = true;
if (ativo) {
  console.log("Exemplo 4 -> Usuário ativo");
}

// Exemplo 5
let numero = -3;
if (numero < 0) {
  console.log("Exemplo 5 -> Número negativo");
}

// -----------------------------
// ? Parte 2 – If com Else
// -----------------------------

// Exemplo 6
let nota = 6;
if (nota >= 7) {
  console.log("Exemplo 6 -> Aprovado");
} else {
  console.log("Exemplo 6 -> Reprovado");
}

// Exemplo 7
let saldo = 50;
if (saldo >= 100) {
  console.log("Exemplo 7 -> Compra autorizada");
} else {
  console.log("Exemplo 7 -> Saldo insuficiente");
}

// Exemplo 8
let senha = "1234";
if (senha === "admin") {
  console.log("Exemplo 8 -> Acesso permitido");
} else {
  console.log("Exemplo 8 -> Senha incorreta");
}

// Exemplo 9
let ligado = false;
if (ligado) {
  console.log("Exemplo 9 -> Ligado");
} else {
  console.log("Exemplo 9 -> Desligado");
}

// Exemplo 10
let idade2 = 15;
if (idade2 >= 18) {
  console.log("Exemplo 10 -> Maior de idade");
} else {
  console.log("Exemplo 10 -> Menor de idade");
}

// -----------------------------
// ? Parte 3 – If com Else If
// -----------------------------

// Exemplo 11
let hora = 10;
if (hora < 12) {
  console.log("Exemplo 11 -> Bom dia");
} else if (hora < 18) {
  console.log("Exemplo 11 -> Boa tarde");
} else {
  console.log("Exemplo 11 -> Boa noite");
}

// Exemplo 12
let media = 8;
if (media >= 9) {
  console.log("Exemplo 12 -> Excelente");
} else if (media >= 7) {
  console.log("Exemplo 12 -> Bom");
} else if (media >= 5) {
  console.log("Exemplo 12 -> Regular");
} else {
  console.log("Exemplo 12 -> Reprovado");
}

// Exemplo 13
let temp = 30;
if (temp < 10) {
  console.log("Exemplo 13 -> Frio");
} else if (temp < 25) {
  console.log("Exemplo 13 -> Agradável");
} else {
  console.log("Exemplo 13 -> Quente");
}

// Exemplo 14
let idade3 = 70;
if (idade3 < 12) {
  console.log("Exemplo 14 -> Criança");
} else if (idade3 < 18) {
  console.log("Exemplo 14 -> Adolescente");
} else if (idade3 < 60) {
  console.log("Exemplo 14 -> Adulto");
} else {
  console.log("Exemplo 14 -> Idoso");
}

// Exemplo 15
let numero2 = 0;
if (numero2 > 0) {
  console.log("Exemplo 15 -> Positivo");
} else if (numero2 < 0) {
  console.log("Exemplo 15 -> Negativo");
} else {
  console.log("Exemplo 15 -> Zero");
}

// -----------------------------
// ?  Parte 4 – Switch Case Básico
// -----------------------------

// Exemplo 16
let cor = "verde";
switch (cor) {
  case "vermelho":
    console.log("Exemplo 16 -> Pare");
    break;
  case "amarelo":
    console.log("Exemplo 16 -> Atenção");
    break;
  case "verde":
    console.log("Exemplo 16 -> Siga");
    break;
  default:
    console.log("Exemplo 16 -> Cor inválida");
}

// Exemplo 17
let dia = 3;
switch (dia) {
  case 1:
    console.log("Exemplo 17 -> Domingo");
    break;
  case 2:
    console.log("Exemplo 17 -> Segunda");
    break;
  case 3:
    console.log("Exemplo 17 -> Terça");
    break;
  default:
    console.log("Exemplo 17 -> Outro dia");
}

// Exemplo 18
let animal = "cachorro";
switch (animal) {
  case "cachorro":
    console.log("Exemplo 18 -> Au au");
    break;
  case "gato":
    console.log("Exemplo 18 -> Miau");
    break;
  default:
    console.log("Exemplo 18 -> Animal desconhecido");
}

// Exemplo 19
let opcao = "B";
switch (opcao) {
  case "A":
    console.log("Exemplo 19 -> Opção A escolhida");
    break;
  case "B":
    console.log("Exemplo 19 -> Opção B escolhida");
    break;
  case "C":
    console.log("Exemplo 19 -> Opção C escolhida");
    break;
  default:
    console.log("Exemplo 19 -> Opção inválida");
}

// Exemplo 20
let estacao = "inverno";
switch (estacao) {
  case "primavera":
    console.log("Exemplo 20 -> Flores");
    break;
  case "verão":
    console.log("Exemplo 20 -> Calor");
    break;
  case "outono":
    console.log("Exemplo 20 -> Folhas caindo");
    break;
  case "inverno":
    console.log("Exemplo 20 -> Frio");
    break;
  default:
    console.log("Exemplo 20 -> Estação inválida");
}

// -----------------------------
// ? Parte 5 – Decisões com Cálculos
// -----------------------------

// Exemplo 21
let a = 5,
  b = 10;
if (a + b > 10) {
  console.log("Exemplo 21 -> Soma maior que 10");
}

// Exemplo 22
let c = 7;
if (c % 2 === 0) {
  console.log("Exemplo 22 -> Par");
} else {
  console.log("Exemplo 22 -> Ímpar");
}

// Exemplo 23
let numero3 = 49;
if (Math.sqrt(numero3) % 1 === 0) {
  console.log("Exemplo 23 -> É um quadrado perfeito");
} else {
  console.log("Exemplo 23 -> Não é quadrado perfeito");
}

// Exemplo 24
let preco = 100;
let desconto = 0;
if (preco > 200) {
  desconto = 20;
} else if (preco > 100) {
  desconto = 10;
} else {
  desconto = 5;
}
console.log("Exemplo 24 -> Desconto:", desconto, "%");

// Exemplo 25
let n1 = 5,
  n2 = 8,
  n3 = 3;
if (n1 > n2 && n1 > n3) {
  console.log("Exemplo 25 -> Maior é n1");
} else if (n2 > n1 && n2 > n3) {
  console.log("Exemplo 25 -> Maior é n2");
} else {
  console.log("Exemplo 25 -> Maior é n3");
}

// -----------------------------
// ? Parte 6 – Switch com Operações
// -----------------------------

// Exemplo 26
let operacao = "+";
let x1 = 10,
  x2 = 20;
switch (operacao) {
  case "+":
    console.log("Exemplo 26 ->", x1 + x2);
    break;
  case "-":
    console.log("Exemplo 26 ->", x1 - x2);
    break;
  case "*":
    console.log("Exemplo 26 ->", x1 * x2);
    break;
  case "/":
    console.log("Exemplo 26 ->", x1 / x2);
    break;
  default:
    console.log("Exemplo 26 -> Operação inválida");
}

// Exemplo 27
let nota2 = 9;
switch (true) {
  case nota2 >= 9:
    console.log("Exemplo 27 -> Excelente");
    break;
  case nota2 >= 7:
    console.log("Exemplo 27 -> Bom");
    break;
  case nota2 >= 5:
    console.log("Exemplo 27 -> Regular");
    break;
  default:
    console.log("Exemplo 27 -> Reprovado");
}

// Exemplo 28
let mes = 2;
switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Exemplo 28 -> 31 dias");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Exemplo 28 -> 30 dias");
    break;
  case 2:
    console.log("Exemplo 28 -> 28 ou 29 dias");
    break;
  default:
    console.log("Exemplo 28 -> Mês inválido");
}

// Exemplo 29
let nivel = "pleno";
switch (nivel) {
  case "junior":
    console.log("Exemplo 29 -> Até 2 anos de experiência");
    break;
  case "pleno":
    console.log("Exemplo 29 -> 2 a 5 anos de experiência");
    break;
  case "senior":
    console.log("Exemplo 29 -> Mais de 5 anos de experiência");
    break;
  default:
    console.log("Exemplo 29 -> Nível inválido");
}

// Exemplo 30
let fruta = "maçã";
switch (fruta) {
  case "maçã":
  case "pera":
  case "uva":
    console.log("Exemplo 30 -> Fruta disponível");
    break;
  default:
    console.log("Exemplo 30 -> Fruta não disponível");
}

// -----------------------------
// ? Parte 7 – Mais complexos (arrays, objetos, validações)
// -----------------------------

// Exemplo 31
let arr = [1, 2, 3];
if (arr.length === 0) {
  console.log("Exemplo 31 -> Array vazio");
} else {
  console.log("Exemplo 31 -> Array com elementos");
}

// Exemplo 32
let texto = "JavaScript";
if (texto.includes("Script")) {
  console.log("Exemplo 32 -> Contém 'Script'");
} else {
  console.log("Exemplo 32 -> Não contém");
}

// Exemplo 33
let user = { nome: "Pedro", idade: 20 };
if (user.idade >= 18) {
  console.log("Exemplo 33 -> Usuário maior de idade");
} else {
  console.log("Exemplo 33 -> Usuário menor de idade");
}

// Exemplo 34
let email = "teste@gmail.com";
if (email.endsWith("@gmail.com")) {
  console.log("Exemplo 34 -> Gmail detectado");
} else {
  console.log("Exemplo 34 -> Outro provedor");
}

// Exemplo 35
let data = new Date();
let diaSemana = data.getDay();
switch (diaSemana) {
  case 0:
    console.log("Exemplo 35 -> Domingo");
    break;
  case 6:
    console.log("Exemplo 35 -> Sábado");
    break;
  default:
    console.log("Exemplo 35 -> Dia útil");
}

// Exemplo 36
let idade4 = 25;
let nacionalidade = "brasileiro";
if (idade4 >= 18 && nacionalidade === "brasileiro") {
  console.log("Exemplo 36 -> Pode votar no Brasil");
} else {
  console.log("Exemplo 36 -> Não pode votar");
}

// Exemplo 37
let senha2 = "123456";
if (senha2.length < 6) {
  console.log("Exemplo 37 -> Senha fraca");
} else if (senha2.length < 10) {
  console.log("Exemplo 37 -> Senha média");
} else {
  console.log("Exemplo 37 -> Senha forte");
}

// Exemplo 38
let produto = { nome: "Notebook", preco: 2500 };
if (produto.preco > 2000) {
  console.log("Exemplo 38 -> Produto caro");
} else {
  console.log("Exemplo 38 -> Produto barato");
}

// Exemplo 39
let valor = 150;
if (valor >= 100 && valor <= 200) {
  console.log("Exemplo 39 -> Valor dentro do intervalo");
} else {
  console.log("Exemplo 39 -> Fora do intervalo");
}

// Exemplo 40
let cidade = "São Paulo";
switch (cidade) {
  case "São Paulo":
  case "Rio de Janeiro":
    console.log("Exemplo 40 -> Sudeste");
    break;
  case "Salvador":
    console.log("Exemplo 40 -> Nordeste");
    break;
  default:
    console.log("Exemplo 40 -> Outra região");
}

// -----------------------------
// ? Parte 8 – Casos Avançados
// -----------------------------

// Exemplo 41
let idade5 = 20;
let carteira = true;
if (idade5 >= 18 && carteira) {
  console.log("Exemplo 41 -> Pode dirigir");
} else {
  console.log("Exemplo 41 -> Não pode dirigir");
}

// Exemplo 42
let peso = 70,
  altura = 1.75;
let imc = peso / (altura * altura);
if (imc < 18.5) {
  console.log("Exemplo 42 -> Abaixo do peso");
} else if (imc < 25) {
  console.log("Exemplo 42 -> Peso normal");
} else {
  console.log("Exemplo 42 -> Acima do peso");
}

// Exemplo 43
let notaFinal = 5.5;
switch (true) {
  case notaFinal >= 9:
    console.log("Exemplo 43 -> Excelente");
    break;
  case notaFinal >= 7:
    console.log("Exemplo 43 -> Bom");
    break;
  case notaFinal >= 5:
    console.log("Exemplo 43 -> Recuperação");
    break;
  default:
    console.log("Exemplo 43 -> Reprovado");
}

// Exemplo 44
let idade6 = 16;
let autorizado = false;
if (idade6 >= 18 || autorizado) {
  console.log("Exemplo 44 -> Entrada permitida");
} else {
  console.log("Exemplo 44 -> Entrada negada");
}

// Exemplo 45
let numero4 = 11;
let primo = true;
for (let i = 2; i < numero4; i++) {
  if (numero4 % i === 0) {
    primo = false;
    break;
  }
}
if (primo) {
  console.log("Exemplo 45 -> Número primo");
} else {
  console.log("Exemplo 45 -> Não é primo");
}

// Exemplo 46
let idade7 = 25;
switch (true) {
  case idade7 < 12:
    console.log("Exemplo 46 -> Criança");
    break;
  case idade7 < 18:
    console.log("Exemplo 46 -> Adolescente");
    break;
  case idade7 < 60:
    console.log("Exemplo 46 -> Adulto");
    break;
  default:
    console.log("Exemplo 46 -> Idoso");
}

// Exemplo 47
let desconto2 = preco > 500 ? 50 : 10;
console.log("Exemplo 47 -> Desconto aplicado:", desconto2);

// Exemplo 48
let usuario = { nome: "Maria", tipo: "admin" };
if (usuario.tipo === "admin") {
  console.log("Exemplo 48 -> Tem acesso total");
} else {
  console.log("Exemplo 48 -> Acesso restrito");
}

// Exemplo 49
let mes2 = 12;
switch (mes2) {
  case 12:
  case 1:
  case 2:
    console.log("Exemplo 49 -> Verão no Brasil");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Exemplo 49 -> Outono");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Exemplo 49 -> Inverno");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Exemplo 49 -> Primavera");
    break;
  default:
    console.log("Exemplo 49 -> Mês inválido");
}

// Exemplo 50
let idade8 = 30,
  salario = 5000;
if (idade8 > 25 && salario > 3000) {
  console.log("Exemplo 50 -> Pode financiar");
} else {
  console.log("Exemplo 50 -> Não pode financiar");
}
