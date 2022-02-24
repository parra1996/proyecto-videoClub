
const express = require('express');
const router = express.Router();

const PedidosController = require('../controllers/PedidosController');


router.post('/', PedidosController.nuevoPedido);

router.get('/', PedidosController.todosPedidos);

module.exports = router;