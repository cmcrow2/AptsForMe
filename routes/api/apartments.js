// routes/api/apartments.js

const express = require('express');
const router = express.Router();

// Load Apartment model
const Apartment = require('../../models/Apartment');

// @route GET api/apartments/test
// @description tests apartments route
// @access Public
router.get('/test', (req, res) => res.send('apartment route testing!'));

// @route GET api/apartments
// @description Get all apartments
// @access Public
router.get('/', (req, res) => {
  Apartment.find()
    .then(apartments => res.json(apartments))
    .catch(err => res.status(404).json({ noapartmentsfound: 'No Apartments found' }));
});

// @route GET api/apartments/:id
// @description Get single apartment by id
// @access Public
router.get('/:id', (req, res) => {
  Apartment.findById(req.params.id)
    .then(apartment => res.json(apartment))
    .catch(err => res.status(404).json({ noapartmentfound: 'No Apartment found' }));
});

// @route GET api/apartments
// @description add/save apartment
// @access Public
router.post('/', (req, res) => {
  Apartment.create(req.body)
    .then(apartment => res.json({ msg: 'Apartment added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this apartment' }));
});

// @route GET api/apartments/:id
// @description Update apartment
// @access Public
router.put('/:id', (req, res) => {
  Apartment.findByIdAndUpdate(req.params.id, req.body)
    .then(apartment => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/apartments/:id
// @description Delete apartment by id
// @access Public
router.delete('/:id', (req, res) => {
  Apartment.findByIdAndRemove(req.params.id, req.body)
    .then(apartment => res.json({ mgs: 'Apartment entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such apartment' }));
});

module.exports = router;