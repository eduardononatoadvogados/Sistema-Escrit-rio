const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/escritorio", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB conectado"))
.catch(err => console.error("Erro MongoDB:", err));

// Rotas
app.use('/api/clientes', require('./routes/clientes'));
app.use('/api/processos', require('./routes/processos'));
app.use('/api/documentos', require('./routes/documentos'));
app.use('/api/whatsapp', require('./routes/whatsapp'));

// Porta do servidor
const PORT = process.env.PORT || 5000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
