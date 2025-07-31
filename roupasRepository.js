import { conection } from "./conection.js";


export async function listarRoupas() {
  const comando = `
    SELECT *
      FROM roupas
  `

  const [registros] = await conection.query(comando)
  return registros;
}

export async function inserirRoupas(Roupa) {
  const comando = `
    INSERT INTO roupas (nome, tamanho, cor, marca, preco)
    VALUES (?, ?, ?, ?, ?);
  `;

  const [info] = await conection.query(comando, [
    Roupa.nome,
    Roupa.tamanho,
    Roupa.cor,
    Roupa.marca,
    Roupa.preco
  ]);

  return info.insertId;
}

export async function deletarRoupas(roupa) {
  const comando = `
    DELETE FROM roupas
    WHERE id = ?
  `;

  const [deleted] = await conection.query(comando, [
    roupa.id
  ]);

  return deleted.affectedRows;
}
