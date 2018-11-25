const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.hbs');
});

router.get('/about', (req, res) => {
    res.render('about.hbs');
});

/*router.get('/', (req, res) => {
    res.send('Index');
});

router.get('/about', (req, res) => {
    res.send('About');
});*/ // Envia Texto

module.exports = router;