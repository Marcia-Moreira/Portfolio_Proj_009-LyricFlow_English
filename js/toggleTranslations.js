// toggleTranslations.js
// Código para alternar as letras que estarão a mostra na faixa\

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-translations");
    const lyricsContainer = document.getElementById("lyrics-container");

    let state = 0; // 0 = ambas, 1 = só inglês, 2 = inglês + pronúncia, 3 = só português

    toggleButton.addEventListener("click", () => {
        state = (state + 1) % 4; // Alterna entre 0, 1, 2 e 3

        // Remove classes anteriores
        lyricsContainer.classList.remove("hide-pt", "hide-en");

        // Percorre todas as faixas para adicionar/remover a pronúncia
        const faixas = lyricsContainer.querySelectorAll(".faixa");
        faixas.forEach((faixa) => {
            if (state === 2) {
                // Estado 2: Adiciona a pronúncia
                if (!faixa.contains(faixa.linePron)) {
                    faixa.appendChild(faixa.linePron);
                }
            } else {
                // Outros estados: Remove a pronúncia
                if (faixa.contains(faixa.linePron)) {
                    faixa.removeChild(faixa.linePron);
                }
            }
        });

        // Aplica a classe correspondente ao estado atual
        if (state === 1) {
            lyricsContainer.classList.add("hide-pt"); // Esconde português
        } else if (state === 2) {
            lyricsContainer.classList.add("hide-pt"); // Esconde português e mostra inglês + pronúncia
        } else if (state === 3) {
            lyricsContainer.classList.add("hide-en"); // Esconde inglês e pronúncia
        }
        // Estado 0: ambas visíveis (não precisa de classe)
    });
});