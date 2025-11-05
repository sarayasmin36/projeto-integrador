document.addEventListener("DOMContentLoaded", function() {

  // Função auxiliar para não repetir código e evitar erros
  function redirecionar(id, destino) {
    const botao = document.getElementById(id);
    if (botao) {
      botao.addEventListener("click", function() {
        window.location.href = destino;
      });
    }
  }

  // Botões do menu
  redirecionar("btn1", "nanotecnologia.html");
  redirecionar("btn2", "tipos.html");
  redirecionar("btn3", "aplicacoes.html");
  redirecionar("btn4", "quemsomos.html");
  redirecionar("btn7", "historia.html");
  redirecionar("btnLogo", "index.html");

  // Botões centrais (presentes na página inicial)
  redirecionar("btn5", "biomaket.html");
  redirecionar("btn6", "nanotecnologia.html");

});
