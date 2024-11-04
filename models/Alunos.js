const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
    Nome: { type: String, required: true },
    Idade: { type: Number, required: true },
    RA: { type: String, required: true, unique: true },
    Fk_idTurma: { type: mongoose.Schema.Types.ObjectId, ref: 'Turma' }
});

module.exports = mongoose.model('Aluno', AlunoSchema);
