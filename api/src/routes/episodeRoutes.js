const { Router } = require("express");
const {getAllEpisodes} = require('../controllers/episodeControllers')




const router = Router();
router.use('/', getAllEpisodes)

module.exports= router;