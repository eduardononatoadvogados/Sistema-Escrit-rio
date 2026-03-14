const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ mensagem: "Rota de documentos funcionando" });
});

router.post('/gerar', (req, res) => {
  res.json({ mensagem: "Documento gerado com sucesso" });
});

module.exports = router;
