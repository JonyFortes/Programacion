const crudPokemones = (app) => {



const Pokemon = require('../models/pokemones.js');



//FUNCIONES DE ENDPOINTS

//GET - Devuelve todas las peliculas en la base

findAllPokemones = (req, res) => {

Pokemon.find((err, pokemones) => {

if(!err){

console.log('GET /pokemones ')

res.send(pokemones);

}else{

console.log('ERROR: ' + err);

}

});

};



//POST - Insert a new TVShow in the DB

addPokemon = function(req, res) {

console.log('POST');

console.log(req.body);
    

var pokemon = new Pokemon({

id: req.body.id,

nombre: req.body.nombre,

tipo1: req.body.tipo1,

tipo2: req.body.tipo2,

categoria: req.body.categoria,

debilidad: req.body.debilidad,

imagen: req.body.imagen,

});



pokemon.save(function(err) {

if(!err) {

console.log('Created');

} else {

console.log('ERROR: ' + err);

}

});



res.send(pokemon);

};



//Rutas de la API, asociadas a una función

app.get('/pokemones', findAllPokemones);

app.post('/pokemones', addPokemon);

}



module.exports = crudPokemones;