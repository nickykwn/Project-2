const fetch = require('node-fetch');

const API_URL = 'http://clashapi.xyz'


function findCard(req, res, next) {
  fetch(`${API_URL}/api/cards`)
  .then(r => r.json())
  .then((results) => {
    res.results = results;
    next();
  })
  .catch((err) => {
    res.err = err;
    next();
  })
}

module.exports = { findCard };
