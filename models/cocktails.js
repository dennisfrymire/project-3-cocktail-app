const mongoose = require('mongoose');

const cocktailSchema = new mongoose.Schema({
    name: String,
    spirit: String
})

const Cocktails = mongoose.model("Cocktails", cocktailSchema);

module.exports = Cocktails;