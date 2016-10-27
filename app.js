const express         = require('express');
const logger          = require('morgan');
const path            = require('path');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');

const app             = express();
const port            = process.argv[2] || process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger('dev'));

app.listen(port, console.log('Server is listening on port ', port));

app.use(express.static(path.join(__dirname, 'public')));
