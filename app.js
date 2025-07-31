import { deletarDesenhos, inserirDesenhos, listarDesenho } from './desenhoRepository.js';

import { inserirEsporte, listarEsporte, deletarEsporte } from './esportesRepository.js';

import { deletarEstado, inserirEstado, listarEstado } from './estadosRepository.js';

import { inserirFilme, listarFilmes, deletarFilme } from './filmesRepository.js';

import { deletarFuncionario, inserirFuncionario, listarFuncionario } from './funcionariosRepository.js';

import { listarJogos, deletarJogos, inserirJogos } from './jogosRepository.js';

import { deletarPizza, inserirPizza, listarPizza } from './pizzasRepository.js';

import { deletarRoupas, listarRoupas, inserirRoupas } from './roupasRepository.js';

import { listarStream, deletarStream, inserirStream } from './streamsRepository.js';

import {listarCarros, deletarCarros, inserirCarros} from './carrosRepository.js'

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

//roupas

api.get('/Roupas', async (req, resp) => {
  let registros = await listarRoupas();
  resp.send(registros);
})

api.post('/Roupas', async (req, resp) => {
  let NewRoupas = req.body;

  let id = await inserirRoupas(NewRoupas);
  resp.send({ novoId: id });
})

api.delete('/Roupas', async (req, resp) => {
  let DeleteRoupas = req.body;

  let sucesso = await deletarRoupas(DeleteRoupas);
  resp.send({ apagado: sucesso });
})

//pizzas

api.get('/Pizza', async (req, resp) => {
  let registros = await listarPizza();
  resp.send(registros);
})

api.post('/Pizza', async (req, resp) => {
  let NewPizza = req.body;

  let id = await inserirPizza(NewPizza);
  resp.send({ novoId: id });
})

api.delete('/Pizza', async (req, resp) => {
  let DeletePizza = req.body;

  let sucesso = await deletarPizza(DeletePizza);
  resp.send({ apagado: sucesso });
})

//funcionarios

api.get('/Funcionario', async (req, resp) => {
  let registros = await listarFuncionario();
  resp.send(registros);
})

api.post('/Funcionario', async (req, resp) => {
  let NewFuncionario = req.body;

  let id = await inserirFuncionario(NewFuncionario);
  resp.send({ novoId: id });
})

api.delete('/Funcionario', async (req, resp) => {
  let DeleteFuncionario = req.body;

  let sucesso = await deletarFuncionario(DeleteFuncionario);
  resp.send({ apagado: sucesso });
})

//carros

api.get('/Carros', async (req, resp) => {
  let registros = await listarCarros();
  resp.send(registros);
})

api.post('/Carros', async (req, resp) => {
  let NewCarros = req.body;

  let id = await inserirCarros(NewCarros);
  resp.send({ novoId: id });
})

api.delete('/Carros', async (req, resp) => {
  let DeleteCarros = req.body;

  let sucesso = await deletarCarros(DeleteCarros);
  resp.send({ apagado: sucesso });
})

api.listen(5010, () => console.log('API subiu com sucesso!'));