const express = require('express');
const router = express.Router();

router.get('/users/login', (req, res) => {
  res.render('users/login');
});

router.get('/users/registro', (req, res) => {
    res.render('users/registro');
});

module.exports = router;