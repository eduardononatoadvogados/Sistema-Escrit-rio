const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

async function gerarPDF(req, res) {
  try {
    const { processo, cliente, conteudo } = req.body || {};

    // Validação básica
    if (!processo || !cliente || !conteudo) {
      return res.status(400).json({
        mensagem: "Campos obrigatórios: processo, cliente, conteudo",
      });
    }

    // Garante pasta docs/
    const docsDir = path.join(__dirname, "..", "docs");
    fs.mkdirSync(docsDir, { recursive: true });

    // Nome do arquivo
    const safeProcesso = String(processo).replace(/[^0-9A-Za-z.-]/g, "_");
    const fileName = `documento_${safeProcesso}_${Date.now()}.pdf`;
    const filePath = path.join(docsDir, fileName);

    // Cria o PDF
    const doc = new PDFDocument({ size: "A4", margin: 50 });
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    // Conteúdo do PDF
    doc.fontSize(18).text("Documento", { align: "center" });
    doc.moveDown();

    doc.fontSize(12).text(`Processo: ${processo}`);
    doc.text(`Cliente: ${cliente}`);
    doc.moveDown();

    doc.fontSize(12).text("Conteúdo:", { underline: true });
    doc.moveDown(0.5);
    doc.fontSize(12).text(String(conteudo), { align: "justify" });

    doc.moveDown(2);
    doc.fontSize(10).text(`Gerado em: ${new Date().toLocaleString("pt-BR")}`, {
      align: "right",
    });

    doc.end();

    // Quando terminar de escrever o arquivo, envia para download
    stream.on("finish", () => {
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
      return res.sendFile(filePath);
    });

    stream.on("error", (err) => {
      console.error("Erro ao salvar PDF:", err);
      return res.status(500).json({ mensagem: "Erro ao salvar PDF" });
    });
  } catch (err) {
    console.error("Erro gerarPDF:", err);
    return res.status(500).json({ mensagem: "Erro ao gerar PDF" });
  }
}

module.exports = {
  gerarPDF,
};