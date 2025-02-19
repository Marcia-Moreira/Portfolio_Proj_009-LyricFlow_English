
// syncLyrics.js
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio-player"); // Pegamos o player
    const lyricsContainer = document.getElementById("lyrics-container"); // Contêiner das faixas

    if (!audio || !lyricsContainer) return; // Evita erros se não encontrar os elementos

    audio.addEventListener("timeupdate", () => {
        let currentTime = Math.floor(audio.currentTime); // Pega o tempo atual arredondado

        // Seleciona todas as faixas (linhas da música)
        const faixas = document.querySelectorAll(".faixa");

        faixas.forEach(faixa => {
            let startTime = parseInt(faixa.getAttribute("data-time"), 10); // Pega o tempo da faixa
            
            // Se o tempo da música for igual ao da faixa, ativamos ela
            if (startTime === currentTime) {
                faixas.forEach(f => f.classList.remove("active")); // Remove "active" de todas
                faixa.classList.add("active"); // Adiciona "active" na faixa certa
            }
        });
    });
});
