var mongoose = require('mongoose'),

    Schema = mongoose.Schema;



var pokemonSchema = new Schema({

id:{ type: String },

nombre:{ type: String },

tipo1:{ type: String },

tipo2:{ type: String },

categoria: { type: String },
    
debilidad: { type: String },
    
imagen: { type: String },

});


module.exports = mongoose.model('Pokemon', pokemonSchema,'pokemondb');