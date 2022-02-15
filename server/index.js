const express = require('express');
const cors = require('cors');
const connection = require('./models/connection');
const taskRouter = require('./routes/ToDo');
require('dotenv').config();

const app = express();

connection();

app.use(express.json());
app.use(cors());

app.use('/tasks', taskRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});