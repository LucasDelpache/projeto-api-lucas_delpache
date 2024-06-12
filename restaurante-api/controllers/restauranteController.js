// Importar o modelo de Restaurante
const Restaurante = require('../models/Restaurante');

// Controlador para listar todos os restaurantes
const listarRestaurantes = async (req, res) => {
  try {
    const restaurantes = await Restaurante.find();
    res.json(restaurantes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar restaurantes.' });
  }
};

// Controlador para buscar um restaurante por ID
const buscarRestaurantePorId = async (req, res) => {
  try {
    const restaurante = await Restaurante.findById(req.params.id);
    if (!restaurante) {
      return res.status(404).json({ message: 'Restaurante não encontrado.' });
    }
    res.json(restaurante);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar restaurante.' });
  }
};

// Controlador para criar um novo restaurante
const criarRestaurante = async (req, res) => {
  try {
    const novoRestaurante = new Restaurante(req.body);
    await novoRestaurante.save();
    res.status(201).json(novoRestaurante);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar restaurante.' });
  }
};

// Controlador para atualizar um restaurante existente
const atualizarRestaurante = async (req, res) => {
  try {
    const restaurante = await Restaurante.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!restaurante) {
      return res.status(404).json({ message: 'Restaurante não encontrado.' });
    }
    res.json(restaurante);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao atualizar restaurante.' });
  }
};

// Controlador para deletar um restaurante
const deletarRestaurante = async (req, res) => {
  try {
    const restaurante = await Restaurante.findByIdAndDelete(req.params.id);
    if (!restaurante) {
      return res.status(404).json({ message: 'Restaurante não encontrado.' });
    }
    res.json({ message: 'Restaurante deletado com sucesso.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao deletar restaurante.' });
  }
};

module.exports = {
  listarRestaurantes,
  buscarRestaurantePorId,
  criarRestaurante,
  atualizarRestaurante,
  deletarRestaurante
};

