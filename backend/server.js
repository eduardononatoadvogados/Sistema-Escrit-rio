Você é um engenheiro Node.js/Express. Eu vou colar o conteúdo inteiro do meu arquivo `backend/server.js`. 
Quero que você me devolva DE VOLTA o arquivo `backend/server.js` COMPLETO (do início ao fim), pronto para eu substituir por inteiro no VSCode, mantendo todas as rotas e middlewares existentes, mas aplicando estas mudanças obrigatórias:

1) A rota GET "/" deve responder exatamente com status 200 e o texto "OK" (sem acentos), assim:
   app.get("/", (req, res) => { res.status(200).send("OK"); });

2) Deve existir uma rota GET "/__version" que responda JSON com pelo menos:
   { "commit": "<algum_valor>", "date": "2026-03-16" }
   (pode manter o commit como string fixa, mas a rota deve existir e funcionar)

3) Garanta que NÃO existam duas definições de app.get("/") no arquivo (apenas uma). 
   Se existirem múltiplas hoje, remova as duplicadas e mantenha somente a versão que retorna "OK".

4) Não altere o comportamento das outras rotas (API), apenas ajuste o mínimo necessário para cumprir os itens acima.

5) Garanta que o arquivo final termine com newline (uma linha em branco no final) para não aparecer "\ No newline at end of file".

Depois que eu colar meu `backend/server.js`, responda com um único bloco de código contendo o arquivo completo atualizado.

Agora aqui está o meu `backend/server.js` atual:
(cole aqui o conteúdo completo do arquivo)