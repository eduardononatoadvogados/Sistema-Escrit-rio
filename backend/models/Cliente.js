const mongoose = require('mongoose');
const ClienteSchema = new mongoose.Schema({
    nome:String, cpf:String, rg:String, telefone:String, email:String,
    endereco:{cep:String,logradouro:String,numero:String,complemento:String,bairro:String,cidade:String,estado:String},
    parteContraria:{nome:String,cpf:String,email:String,telefone:String}
});
module.exports = mongoose.model('Cliente',ClienteSchema);
