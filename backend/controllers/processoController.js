const Processo = require('../models/Processo');
exports.listar=async(req,res)=>res.json(await Processo.find().populate('cliente'));
exports.criar=async(req,res)=>res.json(await Processo.create(req.body));
exports.atualizar=async(req,res)=>res.json(await Processo.findByIdAndUpdate(req.params.id,req.body,{new:true}));
exports.deletar=async(req,res)=>res.json(await Processo.findByIdAndDelete(req.params.id));
