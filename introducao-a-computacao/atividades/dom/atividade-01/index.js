function adicionarTexto() {
  let nome = document.getElementById("nome").value;
  let idade = document.getElementById("idade").value;
  let mensagem = document.getElementById("mensagem").value;
  let cor = document.getElementById("cor").value;
  let alert = document.getElementById("alert");

  alert.style.display = "none";
  alert.innerHTML = "";

  if (nome === "" || idade === "" || mensagem === "") {
    alert.innerHTML = "Por favor, preencha todos os campos.";
    alert.style.display = "block";
    return;
  }

  if (isNaN(idade) || idade <= 17) {
    alert.innerHTML = "Apenas maiores de idade podem exibir";
    alert.style.display = "block";
    return;
  }

  let resultado = document.getElementById("resultado");

  let novoItem = document.createElement("div");
  novoItem.className = "item-resultado";
  novoItem.style.color = cor;

  novoItem.innerText = `
    Nome: ${nome}
    Idade: ${idade} anos
    Mensagem: ${mensagem}
  `;

  resultado.appendChild(novoItem);

  document.getElementById("nome").value = "";
  document.getElementById("idade").value = "";
  document.getElementById("mensagem").value = "";
  document.getElementById("cor").value = "#000000ff";
}
