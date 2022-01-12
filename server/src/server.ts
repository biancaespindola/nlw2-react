import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express(); //localhost:3333

app.use(express.json());
app.use(cors());
app.use(routes);

// GET:  Buscar ou listar alguma informação.
// POST: Criar alguma nova informação.
// PUT:  Atualizar uma informação existente.
// DELETE: Deletar uma informação existente.

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params:identificar qual recurso eu quer atualizar ou deletar
// Query Params:Paginação, filtros, ordenação

app.listen(3333);

