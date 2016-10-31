const MongoClient = require('mongdb');

// process.env.MONGOLAB_URI is DEPRECATED
// process.env.MONGO_URI is needed for when we deply to Heroku
const connectionURL = process.env.MONGOLAB_URI || 'mongodb://localhost/project-2';

function getDB() {
  return MongoClient.connect(connectionURL);
}

module.exports = {
  getDB
};
