// const { MongoClient } = require('mongodb');

// const dbConnection = 'mongodb://localhost:27017/clashroyale';

// function getCards(req, res, next) {
//   MongoClient.connect(dbConnection, (err, db) => {
//     if (err) return next(err);

//     db.collection('cards')
//       .find({})
//       // .sort()
//       .toArray((arrayError, data) => {
//         if(arrayError) return next(arrayError);

//         //return the data
//         res.cards = data;
//         db.close();
//         return next();
//       });
//       return false;
//   });
//   return false;
// };

// module.exports = {
//   getCards
// };
