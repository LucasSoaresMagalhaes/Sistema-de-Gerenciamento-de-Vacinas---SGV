const sql = require('mssql');

// Configuração da conexão
const config = {
    user: 'seuUsuario',
    password: 'suaSenha',
    server: 'seuServidor', 
    database: 'seuBancoDeDados',
    options: {
        encrypt: true, // Use este parâmetro se você estiver conectando a um Azure SQL
        trustServerCertificate: true // Defina como true se estiver usando um SQL Server local
    }
};

// Função assíncrona para conectar e consultar o banco de dados
async function connectToDatabase() {
    try {
        // Conectando ao banco de dados
        await sql.connect(config);
        console.log('Conectado ao banco de dados com sucesso!');

        // Realizando uma consulta
        const result = await sql.query`SELECT * FROM suaTabela`;
        console.log(result);

        // Fechar a conexão
        await sql.close();
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    }
}

// Chame a função para conectar ao banco de dados
connectToDatabase();
