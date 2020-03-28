const mongoose = require('mongoose')

const ClassSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mainTeacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  otherTeachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }]
})

module.exports = User = mongoose.model('class', ClassSchema)
