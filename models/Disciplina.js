const mongoose = require('mongoose');

const DisciplinaSchema = new mongoose.Schema({
    Nome: { type: String, required: true },
    CargaHoraria: { type: Number, required: true },
    Sala: { type: String, required: true }
});

module.exports = mongoose.model('Disciplina', DisciplinaSchema);
