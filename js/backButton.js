// Botão de Voltar

// backButton.js
document.addEventListener("DOMContentLoaded", () => {
    const backButton = document.getElementById("back-button");
    const audioPlayer = document.getElementById("audio-player");

    // Função para parar a música e voltar para a lista
    backButton.addEventListener("click", () => {
        // Para a música
        audioPlayer.pause();
        audioPlayer.currentTime = 0;

        // Redireciona para a lista de músicas
        window.location.href = "index.html";
    });
});
