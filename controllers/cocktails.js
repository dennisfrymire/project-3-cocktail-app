const express = require('express');
const router = express.Router();

// model
const Cocktails = require('../models/cocktails.js');

router.get('/', (req, res) => {
    Cocktails.find({}, (err, foundCocktails) => {
        res.json(foundCocktails)
    })
})

router.post('/', (req, res) => {
    Cocktails.create(req.body, (err, createdBookmark) => {
        res.json(createdBookmark);
    })
})

router.delete('/:id', (req, res) => {
    Cocktails.findByIdAndDelete(req.params.id, (err, deletedBookmark) => {
        res.json(deletedBookmark);
    })
})

router.put('/:id', (req, res) => {
    Cocktails.findByIdAndUpdate(req.params.id, req.body, (err, updatedBookmark) => {
        res.json(updatedBookmark);
    })
})


module.exports = router;