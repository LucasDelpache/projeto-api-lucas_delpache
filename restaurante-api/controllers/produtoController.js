// Importar o modelo de Produto
const Produto = require('../models/Produto');

// Controlador para listar todos os produtos
const listarProdutos = async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar produtos.' });
  }
};

// Controlador para buscar um produto por ID
const buscarProdutoPorId = async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado.' });
    }
    res.json(produto);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar produto.' });
  }
};

// Controlador para criar um novo produto
const criarProduto = async (req, res) => {
  try {
    const novoProduto = new Produto(req.body);
    await novoProduto.save();
    res.status(201).json(novoProduto);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar produto.' });
  }
};

// Controlador para atualizar um produto existente
const atualizarProduto = async (req, res) => {
  try {
    const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado.' });
    }
    res.json(produto);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao atualizar produto.' });
  }
};

// Controlador para deletar um produto
const deletarProduto = async (req, res) => {
  try {
    const produto = await Produto.findByIdAndDelete(req.params.id);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado.' });
    }
    res.json({ message: 'Produto deletado com sucesso.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao deletar produto.' });
  }
};

module.exports = {
  listarProdutos,
  buscarProdutoPorId,
  criarProduto,
  atualizarProduto,
  deletarProduto
};
