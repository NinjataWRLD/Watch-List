const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieName: {
    type: String,
    trim: true,
  },
  director: String,
  readDate: Date,
  read: Boolean
});

module.exports = mongoose.model('Movie', movieSchema);