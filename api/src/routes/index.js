const { Router } = require("express");
const characterRoutes = require('./characterRoutes')
const episodeRoutes = require('./episodeRoutes')

const router = Router();
router.use('/characters', characterRoutes)
router.use('/episodes', episodeRoutes)

// Configurar los routers

module.exports = router;
