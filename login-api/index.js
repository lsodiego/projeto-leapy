const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Usuário fixo
const user = { username: 'admin', password: '123456' };

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true })); // Para formulário HTML
app.use(express.json()); // Para requisições JSON
app.use(express.static(path.join(__dirname, 'public'))); // Serve os HTMLs

// Rota de login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    // Redireciona para index.html (simulando login bem-sucedido)
    res.redirect('index.html');
  } else {
    res.send('<h1>Credenciais inválidas</h1><a href="index.html">Tentar novamente</a>');
  }
});

app.listen(PORT, () => {
  console.log('API rodando em http://localhost:${PORT}');
});