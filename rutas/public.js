const express = require('express');
const router = express.Router();
const ctrl = require('../controladores/main');
const ctrlArtista = require('../controladores/artistas');
const ctrlObra = require('../controladores/obras');
const ctrlVenta = require('../controladores/ventas');

router.get('/', ctrl.home);
router.get('/contacto', ctrl.contacto);

// rutas artista
router.post('/artista/crear', ctrlArtista.guardar);
router.get('/artista/listar', ctrlArtista.listar);
router.get('/artista/listar/:id', ctrlArtista.listarPorId);
router.get('/artista/listarUno/:correo', ctrlArtista.encontrarPorCorreo);
router.delete('/artista/eliminar/:id', ctrlArtista.eliminarPorId);

// rutas obras
router.post('/obra/crear', ctrlObra.guardar);
router.get('/obra/listar', ctrlObra.listar);
router.get('/obra/listar/:id', ctrlObra.listarPorId);
router.get('/obra/encontrar/artista/:id', ctrlObra.encontrarPorArtistaId);
router.get('/obra/encontrar/tags/:tags', ctrlObra.encontrarPorTag);
router.delete('/obra/eliminar/:id', ctrlObra.eliminarPorId);

// rutas venta
router.post('/venta/registrar', ctrlVenta.registrarVenta);
router.get('/venta/listar', ctrlVenta.listar);
router.get('/venta/encontrar/artista/:id', ctrlVenta.encontrarPorArtistaId);
router.delete('/venta/eliminar/:id', ctrlVenta.listar);

module.exports = router;