import { conection } from "./conection.js";


export async function listarJogos() {
  const comando = `
    SELECT *
      FROM jogos
  `

  const [registros] = await conection.query(comando)
  return registros;
}

export async function inserirJogos(jogo) {
  const comando = `
    INSERT INTO jogos (nome, genero, plataforma, ano_lancamento)
    VALUES (?, ?, ?, ?);
  `;

  const [info] = await conection.query(comando, [
    jogo.nome,
    jogo.genero,
    jogo.plataforma,
    jogo.ano_lancamento,
  ]);

  return info.insertId;
}

export async function deletarJogos(Jogo) {
  const comando = `
    DELETE FROM jogos
    WHERE id = ?
  `;

  const [deleted] = await conection.query(comando, [
    Jogo.id
  ]);

  return deleted.deleteId;
}
