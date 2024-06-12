// Importar o modelo de Cliente
const Cliente = require('../models/Cliente');

// Controlador para listar todos os clientes
const listarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar clientes.' });
  }
};

// Controlador para buscar um cliente por ID
const buscarClientePorId = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado.' });
    }
    res.json(cliente);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar cliente.' });
  }
};

// Controlador para criar um novo cliente
const criarCliente = async (req, res) => {
  try {
    const novoCliente = new Cliente(req.body);
    await novoCliente.save();
    res.status(201).json(novoCliente);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar cliente.' });
  }
};

// Controlador para atualizar um cliente existente
const atualizarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado.' });
    }
    res.json(cliente);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao atualizar cliente.' });
  }
};

// Controlador para deletar um cliente
const deletarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndDelete(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado.' });
    }
    res.json({ message: 'Cliente deletado com sucesso.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao deletar cliente.' });
  }
};

module.exports = {
  listarClientes,
  buscarClientePorId,
  criarCliente,
  atualizarCliente,
  deletarCliente
};
