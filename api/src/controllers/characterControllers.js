const axios = require('axios')



async function getAllCharacters(req, res, next){
    try{
        let characters = (await axios('https://rickandmortyapi.com/api/character')).data.results
        res.send(characters)
    }catch(error){
        next(error)
    }

}

module.exports={
    getAllCharacters
}