const express = require('express');
const sql = require('mssql');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());

// Configuração do banco de dados
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true, // Use isso se estiver conectando ao Azure SQL
        trustServerCertificate: true // Defina como true se estiver usando um SQL Server local
    }
};

// Conectar ao banco de dados
sql.connect(dbConfig, err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados');
});

// Rota para obter os dados do usuário
app.get('/api/usuario', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM Usuarios WHERE id = 1`; // Altere conforme necessário
        const vacinas = await sql.query`SELECT * FROM Vacinas WHERE usuario_id = 1`; // Altere conforme necessário
        res.json({ usuario: result.recordset[0], vacinas: vacinas.recordset });
    } catch (err) {
        res.status(500).send({ error: 'Erro ao buscar dados do usuário' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
