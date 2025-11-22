function validar(evento) {
  evento.preventDefault();

  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");
  const senha = document.getElementById("senha");

  mensagem.className = "mensagem";
  mensagem.style.display = "none";

  const emailValido = email.value.trim();
  if (
    emailValido === "" ||
    !emailValido.includes("@") ||
    !emailValido.includes(".")
  ) {
    exibirMensagem("Por favor, insira um email válido, incluindo '@' e '.'.");
    return false;
  }

  if (senha.value.length < 6) {
    exibirMensagem("A senha deve ter pelo menos 6 caracteres.");
    return false;
  }

  const temNumero = /\d/;
  if (!temNumero.test(senha.value)) {
    exibirMensagem("A senha deve conter pelo menos um número.");
    return false;
  }

  const temLetraMaiuscula = /[A-Z]/;
  if (!temLetraMaiuscula.test(senha.value)) {
    exibirMensagem("A senha deve conter pelo menos uma letra maiúscula.");
    return false;
  }

  localStorage.setItem("usuarioEmail", emailValido);

  exibirMensagem("Login bem-sucedido!", true);
  setTimeout(() => {
    window.location.href = "segunda-tela.html";
  }, 1500);
  return false;
}

function exibirMensagem(texto, sucesso = false) {
  const mensagem = document.getElementById("mensagem");
  mensagem.className = sucesso ? "mensagem sucesso" : "mensagem erro";
  mensagem.style.display = "block";
  mensagem.innerText = texto;
}
