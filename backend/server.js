const express = require('express');
const router = express.Router();

const { gerarPDF } = require('../controllers/documentoController');

router.get('/', (req, res) => {
  res.json({ mensagem: "Rota de documentos funcionando" });
});

router.post('/gerar', (req, res) => {
  res.json({ mensagem: "Documento gerado com sucesso" });
});

router.post('/pdf', gerarPDF);

module.exports = router;