const express = require('express');
const router = express.Router();
const ctrl = require('../controladores/main');
const ctrlArtista = require('../controladores/artistas');
const ctrlObra = require('../controladores/obras');

router.get('/', ctrl.home);
router.get('/contacto', ctrl.contacto);

// rutas artista
router.post('/artista/crear', ctrlArtista.guardar);
router.get('/artista/listar', ctrlArtista.listar);
router.get('/artista/listar/:id', ctrlArtista.listarPorId);
router.get('/artista/listarUno/:nombre', ctrlArtista.encontrarPorNombre);
router.delete('/artista/eliminar/:id', ctrlArtista.eliminarPorId);

// rutas obras
router.post('/obra/crear', ctrlObra.guardar);
router.get('/obra/listar', ctrlObra.listar);


module.exports = router;