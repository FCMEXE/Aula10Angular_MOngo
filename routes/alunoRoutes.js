const express = require('express');
const Aluno = require('../models/Aluno');
const router = express.Router();

// Get todos os alunos
router.get('/', async (req, res) => {
    try {
        const alunos = await Aluno.find().populate('Fk_idTurma');
        res.json(alunos);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Get aluno por ID
router.get('/:id', async (req, res) => {
    try {
        const aluno = await Aluno.findById(req.params.id).populate('Fk_idTurma');
        res.json(aluno);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Criar novo aluno
router.post('/', async (req, res) => {
    const aluno = new Aluno(req.body);
    try {
        const savedAluno = await aluno.save();
        res.status(201).json(savedAluno);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Atualizar aluno
router.patch('/:id', async (req, res) => {
    try {
        const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(aluno);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Deletar aluno
router.delete('/:id', async (req, res) => {
    try {
        await Aluno.findByIdAndDelete(req.params.id);
        res.sendStatus(204);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
