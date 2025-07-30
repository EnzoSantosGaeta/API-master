import { conection } from "./conection.js";


export async function listarFilmes() {
  const comando = `
    SELECT *
      FROM filmes
  `

  const [registros] = await conection.query(comando)
  return registros;
}

export async function inserirFilme(Filme) {
  const comando = `
    INSERT INTO filmes (titulo, diretor, genero, ano_lancamento, duracao)
    VALUES (?, ?, ?, ?, ?);
  `;

  const [info] = await conection.query(comando, [
    Filme.titulo,
    Filme.diretor,
    Filme.genero,
    Filme.ano_lancamento,
    Filme.duracao
  ]);

  return info.insertId;
}

export async function deletarFilme(filme) {
  const comando = `
    DELETE FROM filmes
    WHERE id = ?
  `;

  const [deleted] = await conection.query(comando, [
    filme.id
  ]);

  return deleted.deleteId;
}
