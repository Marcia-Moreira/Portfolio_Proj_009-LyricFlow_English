// Para Carregar a Lista de Músicas, conforme JSON existentes:

// loadMusicList.js
document.addEventListener("DOMContentLoaded", async () => {
    const musicList = document.getElementById("music-list");

    // Lista de possíveis arquivos JSON:
    const musicIds = ["001", "002", "003", "004", "005", "006", "007", "008", "009", "010", "011"]; 
    // Adicionar conforme for criando músicas

    for (const id of musicIds) {
        try {
            // Tenta carregar o JSON correspondente
            const response = await fetch(`./lyrics/${id}.json`);
            if (!response.ok) continue; // Se não existir, pula para a próxima

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
