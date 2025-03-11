document.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById("footerPlayer");
    const playButton = document.querySelector(".playBtn");
    const lyricsContainer = document.getElementById("lyrics-container");

    if (playButton && lyricsContainer) {
        playButton.addEventListener("click", () => {
            footer.classList.add("hidden-footer");

            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === "childList" && lyricsContainer.children.length > 0) {
                        footer.classList.add("hidden-footer");
                        observer.disconnect();
                    }
                });
            });

            observer.observe(lyricsContainer, { childList: true });
        });
    }
});