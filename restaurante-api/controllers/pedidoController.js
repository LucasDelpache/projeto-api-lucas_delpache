// Importar o modelo de Pedido
const Pedido = require('../models/Pedido');

// Controlador para listar todos os pedidos
const listarPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find();
    res.json(pedidos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar pedidos.' });
  }
};

// Controlador para buscar um pedido por ID
const buscarPedidoPorId = async (req, res) => {
  try {
    const pedido = await Pedido.findById(req.params.id);
    if (!pedido) {
      return res.status(404).json({ message: 'Pedido não encontrado.' });
    }
    res.json(pedido);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar pedido.' });
  }
};

// Controlador para criar um novo pedido
const criarPedido = async (req, res) => {
  try {
    const novoPedido = new Pedido(req.body);
    await novoPedido.save();
    res.status(201).json(novoPedido);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar pedido.' });
  }
};

// Controlador para atualizar um pedido existente
const atualizarPedido = async (req, res) => {
  try {
    const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pedido) {
      return res.status(404).json({ message: 'Pedido não encontrado.' });
    }
    res.json(pedido);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao atualizar pedido.' });
  }
};

// Controlador para deletar um pedido
const deletarPedido = async (req, res) => {
  try {
    const pedido = await Pedido.findByIdAndDelete(req.params.id);
    if (!pedido) {
      return res.status(404).json({ message: 'Pedido não encontrado.' });
    }
    res.json({ message: 'Pedido deletado com sucesso.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao deletar pedido.' });
  }
};

module.exports = {
  listarPedidos,
  buscarPedidoPorId,
  criarPedido,
  atualizarPedido,
  deletarPedido
};
