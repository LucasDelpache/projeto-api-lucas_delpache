// Importar o modelo de ItemPedido
const ItemPedido = require('../models/ItemPedido');

// Controlador para listar todos os itens de pedido
const listarItensPedido = async (req, res) => {
  try {
    const itensPedido = await ItemPedido.find();
    res.json(itensPedido);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar itens de pedido.' });
  }
};

// Controlador para buscar um item de pedido por ID
const buscarItemPedidoPorId = async (req, res) => {
  try {
    const itemPedido = await ItemPedido.findById(req.params.id);
    if (!itemPedido) {
      return res.status(404).json({ message: 'Item de pedido não encontrado.' });
    }
    res.json(itemPedido);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar item de pedido.' });
  }
};

// Controlador para criar um novo item de pedido
const criarItemPedido = async (req, res) => {
  try {
    const novoItemPedido = new ItemPedido(req.body);
    await novoItemPedido.save();
    res.status(201).json(novoItemPedido);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar item de pedido.' });
  }
};

// Controlador para atualizar um item de pedido existente
const atualizarItemPedido = async (req, res) => {
  try {
    const itemPedido = await ItemPedido.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!itemPedido) {
      return res.status(404).json({ message: 'Item de pedido não encontrado.' });
    }
    res.json(itemPedido);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao atualizar item de pedido.' });
  }
};

// Controlador para deletar um item de pedido
const deletarItemPedido = async (req, res) => {
  try {
    const itemPedido = await ItemPedido.findByIdAndDelete(req.params.id);
    if (!itemPedido) {
      return res.status(404).json({ message: 'Item de pedido não encontrado.' });
    }
    res.json({ message: 'Item de pedido deletado com sucesso.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao deletar item de pedido.' });
  }
};

module.exports = {
  listarItensPedido,
  buscarItemPedidoPorId,
  criarItemPedido,
  atualizarItemPedido,
  deletarItemPedido
};
