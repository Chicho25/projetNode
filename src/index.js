const express = require('express'); 
const path = require('path'); // para concatenar carpetas
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

// initialitations

const app = express();
require('./database');

// settings

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); // para saber donde esta la carpeta views, ya que deberia estar en la raiz
app.engine('.hbs',exphbs({
    defaultLayout: 'main', 
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// middlewares

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secreto_prueba', 
    resave: true, 
    saveUninitialized: true
}));

//global variables



// router

app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

// static files

app.use(express.static(path.join(__dirname, 'public')));

// server is listenning
app.listen(app.get('port'), () =>{
    console.log('El servidor esta escuchando en el puerto', app.get('port'));
});

//minuto tuto 59:19