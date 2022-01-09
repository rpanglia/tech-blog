const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');

const exphbs = require('express-handlebars');
const session = require('express-session');
const routes = require('./controllers');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const helpers = require('./utils/helpers');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(session(sess));
app.use(routes); //turning on routes

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('homepage');
});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});