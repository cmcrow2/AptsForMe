const mongoose = require('mongoose');

const ApartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  beds: {
    type: String,
    required: true
  },
  baths: {
    type: String,
    required: true
  },
  sqr_footage: {
    type: String,
    required: true
  },
  tour: {
    type: Boolean,
    default: false
  },
  tour_date: {
    type: String,
    default: null
  }
});

module.exports = Apartment = mongoose.model('apartment', ApartmentSchema);