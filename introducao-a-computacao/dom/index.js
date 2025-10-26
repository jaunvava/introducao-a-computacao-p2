const form = document.querySelector("#contato-form");
const nomeInput = document.querySelector("#nome");
const numeroInput = document.querySelector("#numero");
const emailInput = document.querySelector("#email");
const mensagemInput = document.querySelector("#mensagem");
const resultDiv = document.querySelector("#result");

function clearErrors() {
  document
    .querySelectorAll(".field-error")
    .forEach((el) => (el.textContent = ""));
}

function showError(id, message) {
  const el = document.querySelector(`#${id}-error`);
  if (el) el.textContent = message;
}

function validate() {
  clearErrors();
  let valid = true;

  const nome = nomeInput.value.trim();
  const idade = numeroInput.value.trim();
  const email = emailInput.value.trim();

  if (!nome) {
    showError("nome", "Por favor informe seu nome.");
    valid = false;
  }

  const idadeNum = Number(idade);
  if (!idade || Number.isNaN(idadeNum) || idadeNum < 0 || idadeNum > 120) {
    showError("numero", "Informe uma idade válida (0–120).");
    valid = false;
  }

  // validação simples de email
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    showError("email", "Informe um e-mail válido.");
    valid = false;
  }

  return valid;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  resultDiv.textContent = "";

  if (!validate()) {
    resultDiv.textContent = "Por favor corrija os erros acima.";
    resultDiv.style.color = "#c2410c";
    return;
  }

  // Simular envio / mostrar resumo
  const resumo = `Olá, eu me chamo ${nomeInput.value.trim()}, tenho ${numeroInput.value.trim()} anos e meu e-mail é ${emailInput.value.trim()}. Mensagem: ${
    mensagemInput.value.trim() || "(nenhuma)"
  }.`;
  resultDiv.textContent = resumo;
  resultDiv.style.color = "#0b2540";

  // Aqui poderíamos enviar via fetch para um servidor.
});

// Limpa mensagens quando o usuário reseta o formulário
form.addEventListener("reset", () => {
  clearErrors();
  resultDiv.textContent = "";
});
