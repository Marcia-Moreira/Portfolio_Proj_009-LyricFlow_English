
# Como gerar um arquivo JSON a partir de um TXT

Verificar o arquivo JavaScript e ajustar as bases.

Como Funciona?
✔️ Lê o arquivo TXT e divide por linhas
✔️ Percorre de 2 em 2 linhas, pegando a primeira como português e a segunda como inglês
✔️ Converte os timestamps para segundos
✔️ Cria um JSON formatado e salva no disco

Como Rodar o Script?
1️⃣ Salva o TXT formatado dentro da pasta lyrics/.
2️⃣ No terminal do VS Code, roda:

sh
=> node generateLyricsJson.js

3️⃣ O JSON será gerado na pasta lyrics/.

---------------------------------------------

🔹 O que precisa ser feito?
1️⃣ Monitorar o tempo da música: Capturar o tempo atual do áudio enquanto ele toca.
2️⃣ Comparar com o JSON: Verificar se há uma linha da letra correspondente ao tempo atual.
3️⃣ Destacar a linha correta: Aplicar uma classe para destacar a linha ativa.
4️⃣ Rolagem automática: Garantir que a linha ativa fique visível no player.
