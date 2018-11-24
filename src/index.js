const express = require('express'); 
const path = require('path'); // para concatenar carpetas
// initialitations
const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); // para saber donde esta la carpeta views, ya que deberia estar en la raiz

// middlewares


//global variables


// static files


// server is listenning
app.listen(app.get('port'), () =>{
    console.log('El servidor esta escuchando en el puerto', app.get('port'));
});

//minuto tuto 19:19