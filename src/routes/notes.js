const express = require('express');
const router = express.Router();

const Note = require('../models/Notes');

router.get('/notes/add', (req, res) => {
  res.render('notes/new-notes');
});

router.post('/notes/new-notes', async (req, res) => {
 const { title, description } = req.body;
 const error = [];
  if(!title){
    error.push({text: 'Por favor escriba un titulo'});
  }
  if(!description){
    error.push({text: 'Por favor escriba un Mensaje'});
  }
  if (error.length > 0) {
    res.render('notes/new-notes', {
      error, 
      title, 
      description
    });
  }else{
    const newNote = new Note({title, description});
    /*console.log(newNote);*/ // para ver que esta guardando
    await newNote.save();
    res.redirect('/notes');
  }
  
});

router.get('/notes', async (req, res) => {
    const notes = await Note.find();
    res.render('notes/all-notes', { notes });
  });

module.exports = router;