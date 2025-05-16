const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Usuário fixo
const user = { username: 'admin', password: '123456' };

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true })); // Para ler formulários HTML
app.use(express.json()); // Para ler JSON

// Serve os arquivos estáticos da pasta "inicio" (ajuste conforme sua estrutura)
app.use(express.static(path.join(__dirname, '../inicio')));

// Rota POST para login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    // Redireciona para a página index.html
    res.redirect('/index.html');
  } else {
    // Mensagem de erro com link para tentar novamente
    res.send('<h1>Credenciais inválidas</h1><a href="/tela-login.html">Tentar novamente</a>');
  }
});

app.listen(PORT, () => {
  console.log('Servidor rodando em http://localhost:${PORT}');
});

