const router = require('express').Router();
const { findCard } = require('../services/clash');

router.get('/', findCard, (req, res) => {
  console.log(res.results);
  res.render('index', {
    results: res.results
  })
});

module.exports = router;
