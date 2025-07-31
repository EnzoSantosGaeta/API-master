import { conection } from "./conection.js";


export async function listarDesenho() {
  const comando = `
    SELECT *
      FROM desenhos
  `

  const [registros] = await conection.query(comando)
  return registros;
}

export async function inserirDesenhos(Desenho) {
  const comando = `
    INSERT INTO desenhos (nome, criador, genero)
    VALUES (?, ?, ?);
  `;

  const [info] = await conection.query(comando, [
    Desenho.nome,
    Desenho.criador,
    Desenho.genero,
  ]);

  return info.insertId;
}

export async function deletarDesenhos(desenho) {
  const comando = `
    DELETE FROM desenhos
    WHERE id = ?
  `;

  const [deleted] = await conection.query(comando, [
    desenho.id
  ]);

  return deleted.affectedRows;
}
