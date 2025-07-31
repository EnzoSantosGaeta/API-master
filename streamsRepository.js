import { conection } from "./conection.js";


export async function listarStream() {
  const comando = `
    SELECT *
      FROM streams
  `

  const [registros] = await conection.query(comando)
  return registros;
}

export async function inserirStream(Stream) {
  const comando = `
    INSERT INTO streams (nome, preco_mensal, qualidade)
    VALUES (?, ?, ?);
  `;

  const [info] = await conection.query(comando, [
    Stream.nome,
    Stream.preco_mensal,
    Stream.qualidade,
  ]);

  return info.insertId;
}

export async function deletarStream(stream) {
  const comando = `
    DELETE FROM streams
    WHERE id = ?
  `;

  const [deleted] = await conection.query(comando, [
    stream.id
  ]);

  return deleted.affectedRows;
}
