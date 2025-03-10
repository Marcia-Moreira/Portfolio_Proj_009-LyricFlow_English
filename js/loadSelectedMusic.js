
// loadSelectedMusic.js
document.addEventListener("DOMContentLoaded", async () => {
    const selectedMusicId = localStorage.getItem("selectedMusic"); // Obtém o ID salvo

    if (!selectedMusicId) {
        console.error("Nenhuma música selecionada.");
        return;
    }

    // Seleciona a seção do player
    const sectionPlayer = document.querySelector(".section-player");

    if (!sectionPlayer) {
        console.error("Elemento .section-player não encontrado.");
        return;
    }

    // Define dinamicamente o data-song-id no HTML
    sectionPlayer.setAttribute("data-song-id", selectedMusicId);

    try {
        // Carrega o JSON correspondente à música escolhida
        const response = await fetch(`./lyrics/${selectedMusicId}.json`);
        if (!response.ok) throw new Error("Erro ao carregar JSON.");

        const musicData = await response.json();

        // Atualiza os elementos do player
        document.getElementById("music-title").textContent = musicData.title;
        document.getElementById("music-artist").textContent = musicData.artist;

        // Atualiza o áudio
        const audio = document.getElementById("audio-player");
        const source = document.getElementById("audio-source");
        source.src = `./audio/${selectedMusicId}.m4a`; // Define o caminho do áudio
        audio.load(); // Recarrega o áudio

        // Atualiza a letra da música
        const lyricsContainer = document.getElementById("lyrics-container");
        lyricsContainer.innerHTML = ""; // Limpa o conteúdo anterior

        musicData.lyrics.forEach((line) => {
            const lineDiv = document.createElement("div");
            lineDiv.classList.add("faixa");
            lineDiv.setAttribute("data-time", line.start); // Define o tempo da linha

            // Linha em inglês:
            const lineEng = document.createElement("div");
            lineEng.classList.add("line-ingles");
            lineEng.innerHTML = `<p>${line.text_en}</p>`;

            // Linha em português:
            const linePt = document.createElement("div");
            linePt.classList.add("line-portugues");
            linePt.innerHTML = `<p>${line.text_pt}</p>`;

            // Linha de pronúncia fonética:
            const linePron = document.createElement("div");
            linePron.classList.add("line-pronuncia");
            linePron.innerHTML = `<p>${line.text_pron}</p>`;

            // Adiciona as linhas à faixa:
            lineDiv.appendChild(lineEng);
            lineDiv.appendChild(linePt);
            // lineDiv.appendChild(linePron);
            // Adiciona a pronúncia

            // Armazena a linha de pronúncia como uma propriedade da faixa
            lineDiv.linePron = linePron;

            // Adiciona a faixa ao container de letras:
            lyricsContainer.appendChild(lineDiv);
        });

    } catch (error) {
        console.error("Erro ao carregar a música:", error);
    }
});