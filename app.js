import { inserirFilme, listarFilmes, deletarFilme } from './filmesRepository.js';

import { listarJogos, deletarJogos, inserirJogos } from './jogosRepository.js';

import express from 'express'
const api = express();
api.use(express.json()); 


//filmes

api.get('/filmes', async (req, resp) => {
  let registros = await listarFilmes();
  resp.send(registros);
})

api.post('/filmes', async (req, resp) => {
  let NewFilm = req.body;

  let id = await inserirFilme(NewFilm);
  resp.send({ novoId: id });
})

api.delete('/filmes', async (req, resp) => {
  let DeleteFilm = req.body;

  let Id = await deletarFilme(DeleteFilm);
  resp.send({ antigoId: Id });
})

//jogos

api.get('/Jogos', async (req, resp) => {
  let registros = await listarJogos();
  resp.send(registros);
})

api.post('/Jogos', async (req, resp) => {
  let NewGame = req.body;

  let id = await inserirJogos(NewGame);
  resp.send({ novoId: id });
})

api.delete('/jogos', async (req, resp) => {
  let DeleteGame = req.body;

  let Id = await deletarJogos(DeleteGame);
  resp.send({ antigoId: Id });
})


api.listen(5010, () => console.log('API subiu com sucesso!'));