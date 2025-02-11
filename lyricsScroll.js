// Letras:

document.addEventListener("DOMContentLoaded", () => {
    const containerLetter = document.querySelector(".container-letter");
    if (!containerLetter) return;

    const faixas = Array.from(containerLetter.querySelectorAll(".faixa"));
    if (faixas.length === 0) return;

    let index = 0;
    const alturaFaixa = faixas[0]?.offsetHeight || 100; // Altura de cada faixa
    let pausado = false; // Controla o estado de pausa
    let tempoPausaInicio = 0; // Armazena o tempo de início da pausa

    // Função para calcular o atraso com base no atributo data-delay
    function calcularAtraso(faixa) {
        const delay = faixa.getAttribute("data-delay");
        return delay ? parseInt(delay) * 1000 : 0; // Converte segundos em milissegundos
    }

    // Atualiza a exibição das faixas
    function atualizarLetras() {
        const faixaAtual = faixas[index];

        // Verifica se a faixa atual tem um atraso personalizado
        if (faixaAtual?.hasAttribute("data-delay") && !pausado) {
            pausado = true; // Ativa o estado de pausa
            tempoPausaInicio = Date.now(); // Armazena o tempo de início da pausa
            const atraso = calcularAtraso(faixaAtual);

            setTimeout(() => {
                pausado = false; // Retoma a rolagem após o atraso
                index++; // Avança para a próxima linha
                atualizarLetras(); 
                // Atualiza novamente
            }, atraso); // Aplica o atraso personalizado
            
            return; 
            // Sai da função sem atualizar ainda
        }

        // Aplica a transformação para rolar as faixas
        faixas.forEach((faixa, i) => {
            if (i >= index) {
                faixa.style.display = "block";
                faixa.style.opacity = i === index ? "1" : "1";
                faixa.style.transform = `translateY(-${index * alturaFaixa}px)`;
                faixa.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
                faixa.classList.add("active"); 
                //! Adiciona a classe .active
            } else {
                faixa.style.display = "block";
                faixa.style.opacity = "0";
                faixa.style.transition = "opacity 0.5s ease-in-out";
                faixa.classList.remove("active"); 
                //! Remove a classe .active
            }
        });
    }

    // Rola as faixas conforme a música toca
    document.querySelectorAll(".container-player").forEach(container => {
        const audio = container.querySelector(".myAudio");

        audio.addEventListener("timeupdate", () => {
            if (!isFinite(audio.duration) || audio.duration <= 0) return;

            // Calcula o índice da faixa com base no tempo atual do áudio
            let progresso = (audio.currentTime / audio.duration) * faixas.length;
            let novoIndex = Math.floor(progresso);

            //! Atualiza o índice apenas se for diferente e não estiver em pausa (Apaguei:  && !pausado)
            if (novoIndex !== index && novoIndex >= 0 && novoIndex < faixas.length) {
                index = novoIndex;
                atualizarLetras();
            }
        });

        // Reset ao Finalizar o Áudio
        audio.addEventListener("ended", () => {
            index = 0;
            atualizarLetras();
        });
    });

    // Inicializa a exibição das letras
    atualizarLetras();
});