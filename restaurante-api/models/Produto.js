const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  preco: { type: Number, required: true },
  restaurante: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurante', required: true }
});

module.exports = mongoose.model('Produto', produtoSchema);
