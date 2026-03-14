const mongoose = require('mongoose');
const ProcessoSchema = new mongoose.Schema({
    numero:String,
    descricao:String,
    cliente:{type:mongoose.Schema.Types.ObjectId,ref:'Cliente'},
    status:{type:String,default:'Em andamento'},
    fases:[{nome:String,dataPrevista:Date,concluida:Boolean}],
    prazos:[{descricao:String,data:Date,status:String}],
    dataCriacao:{type:Date,default:Date.now}
});
module.exports = mongoose.model('Processo',ProcessoSchema);
