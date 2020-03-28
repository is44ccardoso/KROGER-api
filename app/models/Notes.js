const mongoose = require('mongoose')

const NotesSchema = new mongoose.Schema({
  message: { type: String, required: true },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'class',
    required: true
  },
  cordinator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }
})

module.exports = User = mongoose.model('notes', NotesSchema)
