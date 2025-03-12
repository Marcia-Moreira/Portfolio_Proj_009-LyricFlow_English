
# LyricFlow English

O **LyricFlow English** é um projeto desenvolvido para ajudar no aprendizado de inglês através de músicas. Com ele, você pode acompanhar as letras das músicas em tempo real, marcar os tempos das frases e praticar a pronúncia e o entendimento do idioma.

## Funcionalidades

- **Reprodução de Músicas:** Escolha uma música da lista e reproduza o áudio.
- **Letras Sincronizadas:** Acompanhe a letra da música em Inglês, Português ou Fonética em tempo real, com destaque para a frase atual.
- **Prática de Pronúncia:** Use as letras sincronizadas para praticar a pronúncia das palavras em inglês.

## Ferramentas Utilizadas

- **HTML, CSS e JavaScript:** Para a construção da interface e lógica do projeto.
- **Git e GitHub:** Para versionamento e deploy do projeto.
- **JSON:** Para armazenar as letras das músicas e os tempos marcados.
- **Visual Studio Code:** Editor de código utilizado no desenvolvimento.

## Como Usar

### 1. Gerar o Arquivo de Texto com as Letras

1. Escolha uma música e obtenha a letra.
2. Crie um arquivo de texto (`.txt`) com a letra da música.
3. Formate o arquivo de texto para que cada frase esteja em uma linha de tempo separada.

Exemplo:
Irá Chover
It Will Rain

Se um dia você me deixar, amor
If you ever leave me, baby

### 2. Marcar os Tempos

1. Abra o arquivo de texto no seu editor preferido.
2. Reproduza a música e marque os tempos de início e fim de cada frase no formato `[início:fim]`.
3. Adicione as marcações ao lado de cada frase no arquivo de texto.

Exemplo:
[00:00] - Sua Canção -  
[00:00] - Your Song -  
[00:00] - Iúr Song -  

[00:05] É um pouco engraçado esse sentimento aqui dentro  
[00:05] It's a little bit funny this feeling inside  
[00:05] Its á lítul bit fâni dis fílin insáid  

#### 3. Converter para JSON

1. Use o script para converter o arquivo de texto marcado em um arquivo JSON, padrão na pasta `geradores_de_json_music`.
2. **COMANDO TERMINAL:**  
   Execute o seguinte comando dentro da pasta onde está o arquivo `generateLyricJson`:  

   node 001-generateLyricsJson.js

3. O JSON deve seguir o formato abaixo:

Exemplo:

{
  "title": "Your Song",
  "artist": "Ellie Goulding",
  "composer": "Bernie Taupin / Elton John",
  "audioSrc": "./audio/001.m4a",
  "lyricsFile": "C:\\Portfolio_Marcia_Moreira-GERAL\\Portfolio_Proj_009-LyricFlow_English\\lyrics\\001.txt",
  "scrollSpeed": 0,
  "lyrics": [
    {
      "start": 0,
      "text_pt": "- Sua Canção -  ",
      "text_en": "- Your Song -  ",
      "text_pron": "- Iúr Song -  "
    },
    {
      "start": 5,
      "text_pt": "É um pouco engraçado esse sentimento aqui dentro  ",
      "text_en": "It's a little bit funny this feeling inside  ",
      "text_pron": "Its á lítul bit fâni dis fílin insáid  "
    }
  ]
}

## Como Contribuir

Faça um fork do repositório.

Crie uma branch para sua feature (git checkout -b feature/nova-feature).

Commit suas mudanças (git commit -m 'Adiciona nova feature').

Push para a branch (git push origin feature/nova-feature).

Abra um Pull Request.

### Contato

Marcia Moreira.  
