const router                = require('express').Router();
const { authenticate }      = require('../lib/auth');
const { findCard }          = require('../services/clash');
const { saveFavoriteDeck,
        deleteFavoriteDeck,
        getFavoriteDeck }   = require('../models/favorites');

// router.get('/', findCard, (req, res) => {
//   console.log(res.results);
//   console.log(res.images);
//   res.render('card', {
//     results: res.results
//   });
// });

router.get('/', authenticate, getFavoriteDeck, (req, res) => {
  res.render('/card', {
    user: res.user,
    results: res.results || [],
    favorites: res.favorites || []
  });
});

router.post('/search', authenticate, findCard, getFavoriteDeck, (req, res) => {
  res.render('/card', {
    user: res.user,
    results: res.results || [],
    favorites: res.favorites || []
  });
});

router.delete('favorites/:id', deleteFavoriteDeck, (req, res) => {
  res.redirect('/card');
});

router.post('/favorites', saveFavoriteDeck, (req, res) => {
  res.redirect('/card');
});

module.exports = router;
