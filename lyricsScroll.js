// Letras:

// lyricsScroll.js
document.addEventListener("DOMContentLoaded", () => {

    //* Evita erro se não existir
    const containerLetter = document.querySelector(".container-letter");
    if (!containerLetter) return;

    //* Evita erro se não houver faixas
    const faixas = Array.from(containerLetter.querySelectorAll(".faixa"));
    if (faixas.length === 0) return;

    let index = 0;
    // const totalFaixas = faixas.length;
    // const maxVisiveis = 5; // Número de faixas visíveis
    const alturaFaixa = faixas[0]?.offsetHeight || 100;

    //* Atualiza a exibição das faixas
    function atualizarLetras() {
        faixas.forEach((faixa, i) => {
            if (i >= index) {
                faixa.style.display = "block"; //sempre visíveis
                faixa.style.opacity = i === index ? "1" : "1"; //! Retirei o destaque pois a Sincronia fica Difícil
                faixa.style.transform = `translateY(-${index * alturaFaixa}px)`;
                faixa.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
            } else {
                faixa.style.display = "block"; // Mudamos para "block" para evitar sumiço!
                faixa.style.opacity = "0"; // Mas deixamos invisível
                faixa.style.transition = "opacity 0.5s ease-in-out";
            }
        });
    }

    //* Rola as faixas conforme a música toca
    document.querySelectorAll(".container-player").forEach(container => {
        const audio = container.querySelector(".myAudio");

        audio.addEventListener("timeupdate", () => {
            if (!isFinite(audio.duration) || audio.duration <= 0) return;

            let progresso = (audio.currentTime / audio.duration) * faixas.length;
            let novoIndex = Math.floor(progresso);

            if (novoIndex !== index && novoIndex >= 0 && novoIndex < faixas.length) {
                index = novoIndex;
                atualizarLetras();
            }
        });

        //* Reset ao Finalizar o Áudio
        audio.addEventListener("ended", () => {
            index = 0;
            atualizarLetras();
        });

    });

    atualizarLetras(); // Inicializa as letras

});
