const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const alunoRoutes = require('./routes/alunoRoutes');
const disciplinaRoutes = require('./routes/disciplinaRoutes');

const app = express();
const PORT = 3000;

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/aula10_tarefa', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Configurações do middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/alunos', alunoRoutes);
app.use('/api/disciplinas', disciplinaRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
