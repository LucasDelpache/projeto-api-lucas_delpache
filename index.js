const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const restaurante = require('./restaurante-api/routes/restaurantes');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado ao MongoDB');
  mongoose.set('strictQuery', false);
}).catch(err => {
  console.error('Erro ao conectar ao MongoDB', err);
});

app.get('/restaurantes', (req, res) => {
  // Aqui você colocaria o código para lidar com a solicitação
  res.send('Rota /restaurantes funcionando!');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
