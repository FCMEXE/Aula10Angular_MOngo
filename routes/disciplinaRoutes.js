const express = require('express');
const Disciplina = require('../models/Disciplina');
const Aluno = require('../models/Aluno');
const router = express.Router();

// Get todas as disciplinas
router.get('/', async (req, res) => {
    try {
        const disciplinas = await Disciplina.find();
        res.json(disciplinas);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Get disciplina por ID e todos os alunos
router.get('/:id', async (req, res) => {
    try {
        const disciplina = await Disciplina.findById(req.params.id);
        const alunos = await Aluno.find({ Fk_idTurma: req.params.id });
        res.json({ disciplina, alunos });
    } catch (err) {
        res.status(500).send(err);
    }
});

// Criar nova disciplina
router.post('/', async (req, res) => {
    const disciplina = new Disciplina(req.body);
    try {
        const savedDisciplina = await disciplina.save();
        res.status(201).json(savedDisciplina);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Atualizar disciplina
router.patch('/:id', async (req, res) => {
    try {
        const disciplina = await Disciplina.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(disciplina);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Deletar disciplina e todos os alunos relacionados
router.delete('/:id', async (req, res) => {
    try {
        await Disciplina.findByIdAndDelete(req.params.id);
        await Aluno.deleteMany({ Fk_idTurma: req.params.id });
        res.sendStatus(204);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
