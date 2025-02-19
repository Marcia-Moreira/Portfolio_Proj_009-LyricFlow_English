// lyricsScroll.js

document.addEventListener("DOMContentLoaded", () => {
    const lyricsContainer = document.getElementById("lyrics-container"); // Contêiner das letras
    const audio = document.getElementById("audio-player"); // Player de áudio

    if (!lyricsContainer || !audio) return; // Evita erros se não encontrar os elementos

    audio.addEventListener("timeupdate", () => {
        let activeLine = document.querySelector(".faixa.active");

        if (activeLine) {
            let containerHeight = lyricsContainer.clientHeight;
            let lineOffset = activeLine.offsetTop;
            
            // Faz a rolagem para que a linha ativa fique no centro do container
            lyricsContainer.scrollTo({
                top: lineOffset - containerHeight / 2,
                behavior: "smooth"
            });
        }
    });
});
