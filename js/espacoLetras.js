
// espacoLetras.js
function ajustarEspacoLetras() {
    const container = document.querySelector(".container-letter");
    if (!container) return;

    const alturaContainer = container.clientHeight;
    const alturaFaixa = document.querySelector(".faixa")?.offsetHeight || 30;
    
    // Define margens dinâmicas para evitar cortes
    container.style.paddingTop = `${alturaFaixa}px`;
    container.style.paddingBottom = `${alturaFaixa}px`;
}

ajustarEspacoLetras();
window.addEventListener("resize", ajustarEspacoLetras);
