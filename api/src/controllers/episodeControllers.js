const axios = require('axios')
const {Episode} = require('../db.js')



async function getAllEpisodes(){
    try{
        let episodes = (await axios('https://rickandmortyapi.com/api/episode')).data.results.map(e=>({id:e.id, name:e.name,}))

        await Episode.bulkCreate(episodes)//bulkCreate crea a partir de un arreglo       
        console.log('Eposodios cargados en DB correctamente')
    }catch(error){    
        console.log(error)
    }

}

module.exports={
    getAllEpisodes
}