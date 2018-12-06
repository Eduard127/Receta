var express = require('express');
var router = express.Router();
var object = require('../modules/objectsAndTypes');

router.get('/:id', (req, res, next) => {
  object.get('Ingredient', req.params.id, 1)
    .then(response => {
      res.json({ status: true, content: response });
    })
    .catch(response => {
      res.json({ status: false, content: response });
    });
});

router.post('/save', (req, res, next) => {
  object.save([
    'Nombre'
  ], req.query, 'Ingredient')
    .then(response => {
      res.json({ status: true, content: response });
    })
    .catch(response => {
      res.json({ status: false, content: response });
    });
});

router.put('/save/:id', (req, res, next) => {
  let values = req.query;
  values.id = req.params.id;
  object.update([
    'Nombre'
  ], values, 'Ingredient')
    .then(response => {
      res.json({ status: true, content: response });
    })
    .catch(response => {
      res.json({ status: false, content: response });
    });
});

router.delete('/delete/:id', (req, res, next) => {
  object.delete('Category', req.params.id)
    .then(response => {
      res.json({ status: true, content: response });
    })
    .catch(response => {
      res.json({ status: false, content: response });
    });
});

router.get('/Ingredients/:id', (req, res, next) => {
  const includes = {
    id: [
      { model: models.category, as: 'Recipe' }
    ],
    all: [
      { model: models.category, as: 'Recipe' }
    ] 
  };

  object.get('Ingredient', req.params.id, 1, includes)
    .then(response => {
      res.json({ status: true, content: response });
    })
    .catch(response => {
      res.json({ status: false, content: response });
    });
});

module.exports = router;