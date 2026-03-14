const express = require('express');
const router = express.Router();
const {enviarMensagem} = require('../controllers/whatsappController');
router.post('/enviar',enviarMensagem);
module.exports = router;
