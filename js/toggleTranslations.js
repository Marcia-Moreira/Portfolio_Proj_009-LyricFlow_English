// toggleTranslations.js

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-translations");
    const lyricsContainer = document.getElementById("lyrics-container");

    let state = 0; // 0 = ambas, 1 = só inglês, 2 = só português

    toggleButton.addEventListener("click", () => {
        state = (state + 1) % 3; // Alterna entre 0, 1 e 2

        // Remove classes anteriores
        lyricsContainer.classList.remove("hide-pt", "hide-en");

        // Aplica a classe correspondente ao estado atual
        if (state === 1) {
            lyricsContainer.classList.add("hide-pt"); // Esconde português
        } else if (state === 2) {
            lyricsContainer.classList.add("hide-en"); // Esconde inglês
        }
        // Estado 0: ambas visíveis (não precisa de classe)
    });
});