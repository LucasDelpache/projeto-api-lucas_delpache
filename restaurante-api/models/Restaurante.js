const mongoose = require('mongoose');

const restauranteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  endereco: { type: String, required: true },
  telefone: { type: String, required: true },
  cnpj: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Restaurante', restauranteSchema);
