const crudPokes = (app) => {



  const Poke = require('../models/pokes.js');
  
  
  
  //FUNCIONES DE ENDPOINTS
  
  findAllPokes = (req, res) => {
  
  Poke.find((err, pokes) => {
  
  if(!err){
  
  console.log('GET /pokes')
  
  res.send(pokes);
  
  }else{
  
  console.log('ERROR: ' + err);
  
  }
  
  });
  
  };
  
  
  
  //POST - Insert a new TVShow in the DB
  
  addPoke = function(req, res) {
  
  console.log('POST');
  
  console.log(req.body);
  
  
  
  var poke = new Poke({
  
  id: req.body.id,
  
  slug: req.body.slug,
  
  nombreCer: req.body.nombreCer,
  
  ubicacionCer: req.body.ubicacionCer,
  
  urlImagenCer: req.body.urlImagenCer,
  
  promBebCer: req.body.promBebCer,
  
  promComCer: req.body.promComCer,
  
  lat: req.body.lat,
  
  lng: req.body.lng,
  
  });
  
  
  
  poke.save(function(err) {
  
  if(!err) {
  
  console.log('Created');
  
  } else {
  
  console.log('ERROR: ' + err);
  
  }
  
  });
  
  
  
  res.send(poke);
  
  };
  
  
  
  //Rutas de la API, asociadas a una función
  
  app.get('/pokes', findAllPokes);
  
  app.post('/pokes', addPoke);
  
  }
  
  
  
  module.exports = crudPokes;