const router = require('express').Router();
const { findCard } = require('../services/clash');
const { findImage } = require('../services/clash');

router.get('/', findCard, (req, res) => {
  console.log(res.results);
  console.log(res.images);
  res.render('card', {
    results: res.results
  })
});

module.exports = router;
