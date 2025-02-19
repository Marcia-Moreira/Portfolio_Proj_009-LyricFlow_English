// COMANDO TERMINAL: => node generateLyricsJson.js
// Tem que estar dentro da pasta onde está o JS e precisa verificar onde estão os arquivos json e txt.

// generateLyricsJson.js
const fs = require('fs');  // Módulo para manipular arquivos

//! Caminhos dos arquivos:
// //! ALTERE ESSA PARTE MANUALMENTE:
// const txtFilePath = './lyrics/001.txt';
// const jsonFilePath = './lyrics/001.json';
const path = require('path');
const txtFilePath = path.join(__dirname, '../lyrics/002.txt');
const jsonFilePath = path.join(__dirname, '../lyrics/002.json');

// Lê o arquivo TXT:
fs.readFile(txtFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    const lines = data.split('\n').filter(line => line.trim() !== ""); // Remove linhas vazias
    const lyrics = [];

    for (let i = 0; i < lines.length; i += 2) { // Pula de 2 em 2 linhas
        const matchPt = lines[i].match(/\[(\d{2}):(\d{2})\]\s(.+)/);
        const matchEn = lines[i + 1]?.match(/\[(\d{2}):(\d{2})\]\s(.+)/);

        if (matchPt && matchEn) {
            const minutes = parseInt(matchPt[1]);
            const seconds = parseInt(matchPt[2]);
            const start = minutes * 60 + seconds; // Converte para segundos

            lyrics.push({
                start,
                text_pt: matchPt[3], // Linha em português
                text_en: matchEn[3]  // Linha em inglês
            });
        }
    }

    //! ALTERE ESSA PARTE MANUALMENTE:
    // Estrutura do JSON para dados da Composição:
    lyrics.push({
        start: 9999,  // Um valor alto para garantir que será a última exibição
        text_pt: "Composição: Mikky Ekko / Infamous / Joshua Coleman / Julian Bunetta / Teddy Swims",
        text_en: "Composition: Mikky Ekko / Infamous / Joshua Coleman / Julian Bunetta / Teddy Swims"
    });

    //! ALTERE ESSA PARTE MANUALMENTE:
    // Estrutura do JSON final:
    const jsonOutput = {
        title: "Lose Control",
        artist: "Teddy Swims",
        composer: "Mikky Ekko / Infamous / Joshua Coleman / Julian Bunetta / Teddy Swims",  // <- Adiciona a composição aqui
        audioSrc: "./audio/002.m4a",
        lyricsFile: txtFilePath,
        // 🔥 TIME: Ajuste da velocidade do scroll (opcional)
        scrollSpeed: 0,
        lyrics
    };

    // Salva o JSON no arquivo:
    fs.writeFile(jsonFilePath, JSON.stringify(jsonOutput, null, 2), (err) => {
        if (err) {
            console.error('Erro ao salvar JSON:', err);
            return;
        }
        console.log(`Arquivo JSON salvo em: ${jsonFilePath}`);
    });
});
