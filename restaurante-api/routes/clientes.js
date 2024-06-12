const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Rota para listar todos os clientes
router.get('/', clienteController.listarClientes);

// Rota para buscar um cliente por ID
router.get('/:id', clienteController.buscarClientePorId);

// Rota para criar um novo cliente
router.post('/', clienteController.criarCliente);

// Rota para atualizar um cliente existente
router.put('/:id', clienteController.atualizarCliente);

// Rota para deletar um cliente
router.delete('/:id', clienteController.deletarCliente);

module.exports = router;
