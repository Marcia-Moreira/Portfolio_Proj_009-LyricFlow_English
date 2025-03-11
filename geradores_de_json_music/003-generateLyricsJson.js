// COMANDO TERMINAL: => node generateLyricsJson.js (Precisa estar dentro da pasta onde está o arquivo generateLyricJson)
// Tem que estar dentro da pasta onde está o JS e precisa verificar onde estão os arquivos json e txt.

// C:\Portfolio_Marcia_Moreira-GERAL\Portfolio_Proj_009-LyricFlow_English> cd .\geradores_de_json_music\
// C:\Portfolio_Marcia_Moreira-GERAL\Portfolio_Proj_009-LyricFlow_English\geradores_de_json_music> node generateLyricsJson.js 
// => Arquivo JSON salvo em: C:\Portfolio_Marcia_Moreira-GERAL\Portfolio_Proj_009-LyricFlow_English\lyrics\002.json

// generateLyricsJson.js
const fs = require('fs');  // Módulo para manipular arquivos

//! Caminhos dos arquivos:
// //! ALTERE ESSA PARTE MANUALMENTE:
// const txtFilePath = './lyrics/001.txt';
// const jsonFilePath = './lyrics/001.json';
const path = require('path');
const txtFilePath = path.join(__dirname, '../lyrics/003.txt');
const jsonFilePath = path.join(__dirname, '../lyrics/003.json');

// Lê o arquivo TXT:
fs.readFile(txtFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    const lines = data.split('\n').filter(line => line.trim() !== ""); // Remove linhas vazias
    const lyrics = [];

    for (let i = 0; i < lines.length; i += 3) { // Pula de 3 em 3 linhas
        const matchPt = lines[i].match(/\[(\d{2}):(\d{2})\]\s(.+)/);
        const matchEn = lines[i + 1]?.match(/\[(\d{2}):(\d{2})\]\s(.+)/);
        const matchPron = lines[i + 2]?.match(/\[(\d{2}):(\d{2})\]\s(.+)/);

        if (matchPt && matchEn && matchPron) {
            const minutes = parseInt(matchPt[1]);
            const seconds = parseInt(matchPt[2]);
            const start = minutes * 60 + seconds; // Converte para segundos

            lyrics.push({
                start,
                text_pt: matchPt[3], // Linha em português
                text_en: matchEn[3],  // Linha em inglês
                text_pron: matchPron[3] // Linha de pronúncia fonética
            });
        }
    }

    //! ALTERE ESSA PARTE MANUALMENTE:
    // Estrutura do JSON para dados da Composição:
    lyrics.push({
        start: 9999,  // Um valor alto para garantir que será a última exibição
        text_pt: "Composição: Philip Lawrence / Bruno Mars / Ari Levine",
        text_en: "Composition: Philip Lawrence / Bruno Mars / Ari Levine",
        text_pron: "Cômpozíshon: Philip Lawrence / Bruno Mars / Ari Levine" // Pronúncia da composição
    });

    //! ALTERE ESSA PARTE MANUALMENTE:
    // Estrutura do JSON final:
    const jsonOutput = {
        title: "It Will Rain",
        artist: "Bruno Mars",
        composer: "Philip Lawrence / Bruno Mars / Ari Levine",  //! <- Adiciona a composição aqui
        audioSrc: "./audio/003.m4a",
        lyricsFile: txtFilePath,
        // 🔥 TIME: Ajuste da velocidade do scroll (opcional/suspenso)
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
