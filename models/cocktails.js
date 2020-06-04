const mongoose = require('mongoose');

const cocktailSchema = new mongoose.Schema({
    strDrink: String,
    strIngredient1: String,
    strMeasure1: String,
    strIngredient2: String,
    strMeasure2: String,
    strIngredient3: String,
    strMeasure3: String,
    strIngredient4: String,
    strMeasure4: String,
    strIngredient5: String,
    strMeasure5: String,
    strGlass: String,
    strInstructions: String,   
    strDrinkThumb: String,
    strTags: String,
    strAlcoholic: Boolean
})


const Cocktails = mongoose.model("Cocktails", cocktailSchema);

module.exports = Cocktails;


//Search options
//name, first letter, ingredient, cocktail id, ingredient id, random, alcoholic vs nonalcoholic

//object
//strDrink, strTag, strAlcoholic,, strGlass, strInstruction, strIngredient1,2,3 etc, strmeasure1, 2, etc, strDrinkThumb, strCategory
//strDrink, strTag, strAlcoholic, strGlass, strInstruction, strIngredient1, 2, 3 etc, strmeasure1, 2, etc, strDrinkThumb, strCategory
