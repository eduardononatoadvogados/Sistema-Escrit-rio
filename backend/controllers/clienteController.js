const Cliente = require('../models/Cliente');
exports.listar=async(req,res)=>res.json(await Cliente.find());
exports.criar=async(req,res)=>res.json(await Cliente.create(req.body));
exports.atualizar=async(req,res)=>res.json(await Cliente.findByIdAndUpdate(req.params.id,req.body,{new:true}));
exports.deletar=async(req,res)=>res.json(await Cliente.findByIdAndDelete(req.params.id));
