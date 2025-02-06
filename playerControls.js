// Separado: Serviços
document.querySelectorAll(".container-player").forEach(container => {
    const audio = container.querySelector(".myAudio");
    const playBtn = container.querySelector(".playBtn");
    const pauseBtn = container.querySelector(".pauseBtn");
    const progressBar = container.querySelector(".audio-bar");
    const progress = container.querySelector(".audio-progress");
    const containerLetter = document.querySelector(".container-letter"); // Container das letras

    //* Exibe o container das letras e inicia o áudio
    playBtn.addEventListener("click", () => {
        audio.play();
        containerLetter.style.display = "block"; // Garante que o container aparece
    });

    //* Pausa o áudio
    pauseBtn.addEventListener("click", () => {
        audio.pause();
    });

    //* Atualiza a barra de progresso
    audio.addEventListener("timeupdate", () => {
        if (!isFinite(audio.duration) || audio.duration <= 0) return;

        let progressWidth = (audio.currentTime / audio.duration) * 100;
        progress.style.width = progressWidth + "%";
    });

    //* Permite clicar na barra para avançar a música
    progressBar.addEventListener("click", (e) => {
        let clickX = e.offsetX;
        let barWidth = progressBar.clientWidth;
        let duration = audio.duration;

        if (!isFinite(duration) || duration <= 0) return;

        let novoTime = (clickX / barWidth) * duration;
        audio.currentTime = Math.min(novoTime, duration);
    });

    //* Reset ao finalizar o áudio
    audio.addEventListener("ended", () => {
        audio.currentTime = 0;
        progress.style.width = "0%";
    });
});
