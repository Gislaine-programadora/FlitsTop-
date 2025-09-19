// Mensagem de boas-vindas no console
console.log("🚀 Bem-vindo ao FlitsTop - Projeto em execução!");

// Mostra a data atual no console
const hoje = new Date();
console.log("📅 Hoje é:", hoje.toLocaleDateString("pt-BR"));

// Exemplo: alerta ao carregar a página
window.addEventListener("load", () => {
  console.log("✅ Página carregada com sucesso!");
});

// Pequena interação com os botões "Assistir"
document.querySelectorAll(".card-content a").forEach(botao => {
  botao.addEventListener("mouseover", () => {
    console.log("👉 Passou o rato no botão:", botao.innerText);
  });
  botao.addEventListener("click", (e) => {
    e.preventDefault(); // evita abrir link (só para encher)
    alert("🎬 Você clicou em: " + botao.innerText);
  });
});

// Função extra só para enfeite
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("🎲 Número da sorte de hoje:", numeroAleatorio(1, 100));
