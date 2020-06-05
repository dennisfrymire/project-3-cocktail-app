const express = require('express');
const router = express.Router();

// model
const Cocktails = require('../models/cocktails.js');
const Drink_Seed = require('../models/drink_seed.js');

router.get('/', (req, res) => {
    Cocktails.find({}, (err, foundCocktails) => {
        res.json(foundCocktails)
    })
})

// router.get('/communitySearch', (req, res) => {
//     Cocktails.find({}, (err, foundCommunityCocktails) => {
//         res.json(foundCommunityCocktails);
//     })
// })

router.get('/:id', (req, res) => {
    Cocktails.findById(req.params.id, (err, foundCocktail) => {
        res.json(foundCocktail);
    })
})

router.post('/', (req, res) => {
    Cocktails.create(req.body, (err, createdCocktail) => {
        res.json(createdCocktail);
    })
})

router.delete('/:id', (req, res) => {
    Cocktails.findByIdAndDelete(req.params.id, (err, deletedCocktail) => {
        res.json(deletedCocktail);
    })
})

// Cocktails.create(Drink_Seed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided drink data')
// })

Cocktails.countDocuments({}, (err, data) => {
    if (err) console.log(err.message)
    console.log(`There are ${data} drinks in this database`)
  })

router.put('/:id', (req, res) => {
    Cocktails.findByIdAndUpdate(req.params.id, req.body, (err, updatedCocktail) => {
        res.json(updatedCocktail);
    })
})


module.exports = router;