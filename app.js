const dotEnv          = require('dotenv').config({silent: true});
const express         = require('express');
const logger          = require('morgan');
const path            = require('path');
const bodyParser      = require('body-parser');
const session         = require('express-session');
const cookieParser    = require('cookie-parser');
const methodOverride  = require('method-override');
const indexRouter     = require('./routes/index');
const authRouter      = require('./routes/auth');
const usersRouter     = require('./routes/users');
const cardsRouter     = require('./routes/card');

const app             = express();
const SECRET          = 'tacos3000';
const port            = process.argv[2] || process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

// log requests to STDOUT
app.use(logger('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());


// midelware for method override
app.use(methodOverride('_method'));

// This is how we read the cookies sent over from the browser
app.use(cookieParser());

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET
}));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/card', cardsRouter);

app.listen(port, console.log('Server is listening on port ', port));

app.use(express.static(path.join(__dirname, 'public')));
