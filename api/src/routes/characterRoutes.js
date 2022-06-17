const { Router } = require("express");
const { getAllCharacters } = require('../controllers/characterControllers')




const router = Router();
router.use('/', getAllCharacters)

module.exports= router;