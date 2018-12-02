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
    req.flash('success_msg', 'Nota Agregada');
    res.redirect('/notes');
  }
  
});

router.get('/notes', async (req, res) => {
    const notes = await Note.find().sort({date : 'desc'}); 
    //se podria colocar para buscar uno en espacifico Note.find({descriptio: 'ndfjkvn'})
    res.render('notes/all-notes', { notes });
  });

  router.get('/notes/edit/:id', async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.render('notes/edit-note', { note });
  });

  router.put('/notes/edit-note/:id', async (req, res) => {
    const {title, description} = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, description});
    req.flash('success_msg', 'Nota actualizada');
    res.redirect('/notes');
  });

  router.delete('/notes/delete/:id', async(req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Nota Eliminada');
    res.redirect('/notes');
    //console.log(req.params.id);
    //res.send('OK');
  });

module.exports = router;