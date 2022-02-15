const express = require('express');
const cors = require('cors');
const connection = require('./models/connection');
require('dotenv').config();

const app = express();

connection();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});