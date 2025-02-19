// Para Carregar a Lista de Músicas, conforme JSON existentes:

// loadMusicList.js
document.addEventListener("DOMContentLoaded", async () => {
    const musicList = document.getElementById("music-list");

    // Função para gerar IDs no formato "001", "002", ..., "999"
    function generateMusicIds(start, end) {
        const ids = [];
        for (let i = start; i <= end; i++) {
            ids.push(String(i).padStart(3, "0")); // Formata o número com 3 dígitos
        }
        return ids;
    }

    // Gera IDs de 001 a 999 (ou ajuste o limite conforme necessário)
    const musicIds = generateMusicIds(1, 999);

    for (const id of musicIds) {
        try {
            // Tenta carregar o JSON correspondente
            const response = await fetch(`./lyrics/${id}.json`);

            // Se o arquivo não existir (status 404), pula para o próximo ID
            if (response.status === 404) continue;

            // Se houver outro erro, lança uma exceção
            if (!response.ok) throw new Error(`Erro ao carregar ${id}.json: ${response.statusText}`);

            const musicData = await response.json();

            // Criando item na lista:
            const listItem = document.createElement("li");
            listItem.textContent = `${musicData.title} - ${musicData.artist}`;
            listItem.dataset.musicId = id;

            // Evento de clique para selecionar música
            listItem.addEventListener("click", () => {
                localStorage.setItem("selectedMusic", id);
                window.location.href = "player.html"; // Vai para o player
            });

            musicList.appendChild(listItem);
        } catch (error) {
            console.error(`Erro ao carregar ${id}.json`, error);
        }
    }
});