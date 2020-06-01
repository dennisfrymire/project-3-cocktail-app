const mongoose = require('mongoose');

const cocktailSchema = new mongoose.Schema({
    name: String,
    spirit: String,
})


const Cocktails = mongoose.model("Cocktails", cocktailSchema);

module.exports = Cocktails;


//Search options
//name, first letter, ingredient, cocktail id, ingredient id, random, alcoholic vs nonalcoholic

//object
//strDrink, strTag, strAlcoholic, strGlass, strInstruction, strIngredient1, 2, 3 etc, strmeasure1, 2, etc, strDrinkThumb, strCategory