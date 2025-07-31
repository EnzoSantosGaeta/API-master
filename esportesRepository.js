import { conection } from "./conection.js";


export async function listarEsporte() {
  const comando = `
    SELECT *
      FROM esportes
  `

  const [registros] = await conection.query(comando)
  return registros;
}

export async function inserirEsporte(Esporte) {
const comando = `
  INSERT INTO esportes (nome, origem)
  VALUES (?, ?)
`;


  const [info] = await conection.query(comando, [
    Esporte.nome,
    Esporte.origem,
  ]);

  return info.insertId;
}

export async function deletarEsporte(esporte) {
  const comando = `
    DELETE FROM esportes
    WHERE id = ?
  `;

  const [deleted] = await conection.query(comando, [
    esporte.id
  ]);

  return deleted.affectedRows;
}
