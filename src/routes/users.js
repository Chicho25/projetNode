const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/users/login', (req, res) => {
  res.render('users/login');
});

router.get('/users/registro', (req, res) => {
    res.render('users/registro');
});

router.post('/users/registro', async (req, res) => {
  const {name, email, pass, cpass} = req.body;
  const error = [];
  if (pass != cpass) {
    error.push({text: 'La contrase;a no coincide'})
  }
  if (pass.length < 4) {
    error.push({text: 'La contrase;a tiene que ser mayor a y digitos'});
  }
  if (error.length > 0) {
    res.render('users/registro', {error, name, email, pass, cpass});
  }else{
    const emailUser = await User.findOne({email: email});
    if (emailUser) {
      req.flash('error_msg', 'El email ya esta en uso');
      res.redirect('users/registro');
    }
    const newUser = new User({name, email, pass});
    newUser.pass = await newUser.encryptPassword(pass);
    await newUser.save();
    req.flash('success_msg', 'Esta Registrado');
    res.redirect('/users/login');
  }
  /*console.log(req.body);
  res.send('ok');*/
});

module.exports = router;