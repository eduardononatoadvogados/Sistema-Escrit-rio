const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const axios = require('axios');

exports.gerarPDF = async (req,res)=>{
    const {cliente,processo,conteudo,email,whatsapp} = req.body;
    const doc = new PDFDocument();
    const filePath = path.join(__dirname,../../docs/.pdf);
    doc.pipe(fs.createWriteStream(filePath));
    doc.fontSize(20).text(Processo: ,{align:'center'});
    doc.fontSize(16).text(Cliente: );
    doc.text(Parte contrária: );
    doc.text('Conteúdo do documento:');
    doc.text(conteudo);
    doc.end();

    // Envio e-mail
    if(email){
        const transporter = nodemailer.createTransport({
            host:process.env.SMTP_HOST,
            port:process.env.SMTP_PORT,
            auth:{ user:process.env.SMTP_USER, pass:process.env.SMTP_PASS }
        });
        await transporter.sendMail({
            from:process.env.SMTP_USER,
            to:email,
            subject:Documento Processo ,
            text:'Segue documento em anexo.',
            attachments:[{path:filePath}]
        });
    }

    // Envio WhatsApp
    if(whatsapp){
        await axios.post('https://api.seuservicowhatsapp.com/sendMessage',{
            to: whatsapp,
            message: Segue documento do processo : ,
            apiKey: process.env.WHATSAPP_API_KEY
        });
    }

    res.json({message:'PDF gerado e enviado',path:filePath});
};
