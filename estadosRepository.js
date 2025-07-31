import { conection } from "./conection.js";


export async function listarEstado() {
  const comando = `
    SELECT *
      FROM estados
  `

  const [registros] = await conection.query(comando)
  return registros;
}

export async function inserirEstado(Estado) {
const comando = `
  INSERT INTO estados (nome, sigla)
  VALUES (?, ?)
`;


  const [info] = await conection.query(comando, [
    Estado.nome,
    Estado.sigla,
  ]);

  return info.insertId;
}

export async function deletarEstado(estado) {
  const comando = `
    DELETE FROM estados
    WHERE id = ?
  `;

  const [deleted] = await conection.query(comando, [
    estado.id
  ]);

  return deleted.affectedRows;
}
