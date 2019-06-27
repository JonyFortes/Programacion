var mongoose = require('mongoose'),

    Schema = mongoose.Schema;

    
    var pokeSchema = new Schema({
    "info"= {
      "count": 1,
      "page": 1,
      "next": "https://pokemonapi.com/api/pokemons/?page=2",
      "prev": ""
    },
    "results"= [
      {
        "id": 1,
        "number": "004",
        "name": "Charmander",
        "heigh": "0,6 m",
        "weight":"8,5 kg",
        "categorie": "Lizard",
        "habilities": "sea ​​flames",
        "genders": "both",
        "photo":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        "origin": {
          "type": "Fire",
          "debility": ["land","Rock","Water"]
        },
       "evolutions": [
        "https://pokemonapi.com/api/pokemons/6",
        "https://pokemonapi.com/api/pokemons/7"
       ],
      },
      {
        "id": 2,
        "number": "007",
        "name": "Squirtle",
        "heigh": "0,5 m",
        "weight":"  9,0 kg",
        "categorie": "Tortle",
        "habilities": "torrent",
        "genders": "both",
        "photo":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
        "origin": {
          "type": "water",
          "debility": ["electric","plant","Water"]
        },
       "evolutions": [
        "https://pokemonapi.com/api/pokemons/8",
        "https://pokemonapi.com/api/pokemons/9"
       ],
      },
      {
        "id": 3,
        "number": "001",
        "name": "Bulbasur",
        "heigh": "0,5 m",
        "weight":"6,9 kg",
        "categorie": "seed",
        "habilities": "thickness",
        "genders": "both",
        "photo":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        "origin": {
          "type": ["plant","poison"],
          "debility": ["fire","flying","ice","psychic"]
        },
       "evolutions": [
        "https://pokemonapi.com/api/pokemons/10",
        "https://pokemonapi.com/api/pokemons/11"
       ],
      },
      {
        "id": 4,
        "number": "152",
        "name": "Chikorita",
        "heigh": "0,9 m",
        "weight":"6,4 kg",
        "categorie": "Sheet",
        "habilities": "thickness",
        "genders": "both",
        "photo":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png",
        "origin": {
          "type": "plant",
          "debility":["bug", "fire","flying","ice","poison"]
        },
       "evolutions": [
        "https://pokemonapi.com/api/pokemons/12",
        "https://pokemonapi.com/api/pokemons/13"
      ]
    },
    {
      "id": 5,
      "number": "155",
      "name": "Cyndaquil",
      "heigh": "0,5 m",
      "weight":"7,9 kg",
      "categorie": "fire rat",
      "habilities": "sea flames",
      "genders": "both",
      "photo":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png",
      "origin": {
        "type": "fire",
        "debility":["land", "rock","water"]
      },
     "evolutions": [
      "https://pokemonapi.com/api/pokemons/14",
      "https://pokemonapi.com/api/pokemons/15"
    ]
  },
  {
    "id": 6,
    "number": "005",
    "name": "Charmelion",
    "heigh": "1,1m",
    "weight":"19,0 kg",
    "categorie": "Lizard",
    "habilities": "sea ​​flames",
    "genders": "both",
    "photo":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    "origin": {
      "type": "Fire",
      "debility": ["land","rock","water"]
    },
   "evolutions": [
    "https://pokemonapi.com/api/pokemons/7"
   ],
  }, {
    "id": 7,
    "number": "006",
    "name": "Charizard",
    "heigh": "1,7m",
    "weight":"90,5 kg",
    "categorie": "Lizard",
    "habilities": "sea ​​flames",
    "genders": "both",
    "photo":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    "origin": {
      "type": ["fire","flying"],
      "debility": ["land","rock","water"]
    },
   "evolutions": "There're no evolutions to display. I'm sorry"
  },
  {
    "id": 8,
    "number": "008",
    "name": "Wartortle",
    "heigh": "1,0 m",
    "weight":"22,5 kg",
    "categorie": "tortle",
    "habilities": "torrent",
    "genders": "both",
    "photo":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
    "origin": {
      "type": "water",
      "debility": ["electric","plant"]
    },
   "evolutions": [
    "https://pokemonapi.com/api/pokemons/9"
   ],
  }, 
  {
    "id": 9,
    "number": "009",
    "name": "Blastoise",
    "heigh": "1,6 m",
    "weight":"85,5 kg",
    "categorie": "shellfish",
    "habilities": "torrent",
    "genders": "both",
    "photo":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    "origin": {
      "type": "water",
      "debility": ["electric","plant"]
    },
   "evolutions": "There're no evolutions to display. I'm sorry"
  }, 
  {
    "id": 10,
    "number": "002",
    "name": "Ivysaur",
    "heigh": "1,0 m",
    "weight":"13,0 kg",
    "categorie": "seed",
    "habilities": "thickness",
    "genders": "both",
    "photo":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    "origin": {
      "type": ["plant","poison"],
      "debility": ["fire","flying","ice","psychic"]
    },
   "evolutions": "https://pokemonapi.com/api/pokemons/11"
  },
  {
    "id": 11,
    "number": "003",
    "name": "Venusaur",
    "heigh": "2,0 m",
    "weight":"100,0 kg",
    "categorie": "seed",
    "habilities": "thickness",
    "genders": "both",
    "photo":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    "origin": {
      "type": ["plant","poison"],
      "debility": ["fire","flying","ice","psychic"]
    },
   "evolutions":"There're no evolutions to display. I'm sorry"
  },
  {
    "id": 12,
    "number": "153",
    "name": "Bayleef",
    "heigh": "1,2m",
    "weight":"15,8 kg",
    "categorie": "gheet",
    "habilities": "thickness",
    "genders": "both",
    "photo":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/153.png",
    "origin": {
      "type": "plant",
      "debility":["bug", "fire","flying","ice","poison"]
    },
   "evolutions":"https://pokemonapi.com/api/pokemons/13"
},
{
  "id": 13,
  "number": "154",
  "name": "Meganium",
  "heigh": "1,8 m",
  "weight":"100,5 kg",
  "categorie": "grass",
  "habilities": "thickness",
  "genders": "both",
  "photo":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/154.png",
  "origin": {
    "type": "plant",
    "debility":["bug", "fire","flying","ice","poison"]
  },
  "evolutions":"There're no evolutions to display. I'm sorry"
},
{
  "id": 14,
  "number": "156",
  "name": "Quilava",
  "heigh": "0,9 m",
  "weight":"19,0 kg",
  "categorie": "vulcan",
  "habilities": "sea flames",
  "genders": "both",
  "photo":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/156.png",
  "origin": {
    "type": "fire",
    "debility":["land", "rock","water"]
  },
 "evolutions": 
  "https://pokemonapi.com/api/pokemons/15"
},
{
  "id": 14,
  "number": "157",
  "name": "Typhlosion",
  "heigh": "1,7 m",
  "weight":"79,5 kg",
  "categorie": "vulcan",
  "habilities": "sea flames",
  "genders": "both",
  "photo":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/157.png",
  "origin": {
    "type": "fire",
    "debility":["land", "rock","water"]
  },
 "evolutions":"There're no evolutions to display. I'm sorry"
},  

  ]
  });

  module.exports = mongoose.model('Pokes', pokeSchema);

