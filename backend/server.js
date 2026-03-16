const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexão com MongoDB
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/escritorio")
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error("Erro MongoDB:", err));

// Rotas
app.use("/api/clientes", require("./routes/clientes"));
app.use("/api/processos", require("./routes/processos"));
app.use("/api/documentos", require("./routes/documentos"));
app.use("/api/whatsapp", require("./routes/whatsapp"));

// Health check
app.get("/", (req, res) => {
  res.status(200).send("OK");
});

// Version check
app.get("/__version", (req, res) => {
  res.status(200).json({
    commit: process.env.RENDER_GIT_COMMIT || process.env.COMMIT_SHA || "unknown",
    date: "2026-03-16",
  });
});

// Porta do servidor
const PORT = process.env.PORT || 5001;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});