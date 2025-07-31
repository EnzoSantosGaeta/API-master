import { deletarDesenhos, inserirDesenhos, listarDesenho } from './desenhoRepository.js';

import { inserirEsporte, listarEsporte, deletarEsporte } from './esportesRepository.js';

import { deletarEstado, inserirEstado, listarEstado } from './estadosRepository.js';

import { inserirFilme, listarFilmes, deletarFilme } from './filmesRepository.js';

import { listarJogos, deletarJogos, inserirJogos } from './jogosRepository.js';

import { listarStream, deletarStream, inserirStream } from './streamsRepository.js';

import express from 'express'
const api = express();
api.use(express.json()); 


//filmes

api.get('/filmes', async (req, resp) => {
  let registros = await listarFilmes();
  resp.send(registros);
});

api.post('/filmes', async (req, resp) => {
  let NewFilm = req.body;

  let id = await inserirFilme(NewFilm);
  resp.send({ novoId: id });
});

api.delete('/filmes', async (req, resp) => {
  let id = req.body;

  let sucesso = await deletarFilme(id);
  resp.send({ ID_apagados: sucesso });
});

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

  let sucesso = await deletarJogos(DeleteGame);
  resp.send({ apagado: sucesso });
})

//streams

api.get('/Stream', async (req, resp) => {
  let registros = await listarStream();
  resp.send(registros);
})

api.post('/Stream', async (req, resp) => {
  let Newstream = req.body;

  let id = await inserirStream(Newstream);
  resp.send({ novoId: id });
})

api.delete('/Stream', async (req, resp) => {
  let DeleteStream = req.body;

  let sucesso = await deletarStream(DeleteStream);
  resp.send({ apagado: sucesso });
})

//estados

api.get('/Estados', async (req, resp) => {
  let registros = await listarEstado();
  resp.send(registros);
})

api.post('/Estados', async (req, resp) => {
  let NewEstado = req.body;

  let id = await inserirEstado(NewEstado);
  resp.send({ novoId: id });
})

api.delete('/Estados', async (req, resp) => {
  let DeleteEstado = req.body;

  let sucesso = await deletarEstado(DeleteEstado);
  resp.send({ apagado: sucesso });
})

//esportes

api.get('/Esporte', async (req, resp) => {
  let registros = await listarEsporte();
  resp.send(registros);
})

api.post('/Esporte', async (req, resp) => {
  let NewEsporte = req.body;

  let id = await inserirEsporte(NewEsporte);
  resp.send({ novoId: id });
})

api.delete('/Esporte', async (req, resp) => {
  let DeleteEsporte = req.body;

  let sucesso = await deletarEsporte(DeleteEsporte);
  resp.send({ apagado: sucesso });
})

//desenhos

api.get('/Desenhos', async (req, resp) => {
  let registros = await listarDesenho();
  resp.send(registros);
})

api.post('/Desenhos', async (req, resp) => {
  let NewDesenho = req.body;

  let id = await inserirDesenhos(NewDesenho);
  resp.send({ novoId: id });
})

api.delete('/Desenhos', async (req, resp) => {
  let DeleteDesenho = req.body;

  let sucesso = await deletarDesenhos(DeleteDesenho);
  resp.send({ apagado: sucesso });
})

api.listen(5010, () => console.log('API subiu com sucesso!'));