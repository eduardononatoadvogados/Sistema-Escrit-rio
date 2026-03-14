const axios = require('axios');
exports.enviarMensagem = async (req,res) => {
    const { numero,mensagem } = req.body;
    if(!process.env.WHATSAPP_API_KEY) return res.status(500).json({error:'Chave WhatsApp não configurada'});
    try{
        await axios.post('https://api.seuservicowhatsapp.com/sendMessage',{
            to: numero,
            message: mensagem,
            apiKey: process.env.WHATSAPP_API_KEY
        });
        res.json({success:true,message:'Mensagem enviada com sucesso!'});
    }catch(err){
        console.error(err);
        res.status(500).json({error:'Erro ao enviar mensagem'});
    }
};
