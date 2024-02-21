'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let pokemonSchema = new Schema({
    id: String,
    nombre: String,
    tipo: String,
    descripcion: String
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema, "pokemon");

module.exports = Pokemon;