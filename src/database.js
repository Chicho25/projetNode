const mongose = require('mongoose');

mongose.connect('mongodb://localhost/peliculas', {
    useCreateIndex: true, 
    useNewUrlParser: true, 
    useFindAndModify: false
})
    .then(db => console.log('DB esta conectada'))
    .catch(err => console.error(err));