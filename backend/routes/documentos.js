const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');

router.get('/', (req, res) => {
  res.json({ mensagem: "Rota de documentos funcionando" });
});

router.post('/gerar', (req, res) => {
  res.json({ mensagem: "Documento gerado com sucesso" });
});

// NOVA ROTA: gerar PDF e retornar no response
router.post('/pdf', (req, res) => {
  const { processo, cliente, conteudo } = req.body || {};

  if (!processo || !cliente || !conteudo) {
    return res.status(400).json({
      erro: "Campos obrigatórios: processo, cliente, conteudo"
    });
  }

  const doc = new PDFDocument({ size: 'A4', margin: 50 });

  // Headers para download
  const filename = `documento_${String(processo).replace(/[^\dA-Za-z.-]/g, "_")}.pdf`;
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

  // Pipe do PDF para a resposta HTTP
  doc.pipe(res);

  // Conteúdo do PDF (simples)
  doc.fontSize(18).text('Documento', { align: 'center' });
  doc.moveDown();

  doc.fontSize(12).text(`Processo: ${processo}`);
  doc.text(`Cliente: ${cliente}`);
  doc.moveDown();

  doc.fontSize(12).text('Conteúdo:');
  doc.moveDown(0.5);
  doc.fontSize(12).text(String(conteudo), { align: 'left' });

  // Finaliza
  doc.end();
});

module.exports = router;