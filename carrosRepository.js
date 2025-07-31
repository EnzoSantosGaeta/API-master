import { conection } from "./conection.js";


export async function listarCarros() {
  const comando = `
    SELECT *
      FROM carros
  `

  const [registros] = await conection.query(comando)
  return registros;
}

export async function inserirCarros(Carros) {
  const comando = `
    INSERT INTO carros (modelo, ano, marca, preco)
    VALUES (?, ?, ?, ?);
  `;

  const [info] = await conection.query(comando, [
    Carros.modelo,
    Carros.ano,
    Carros.marca,
    Carros.preco
  ]);

  return info.insertId;
}

export async function deletarCarros(carros) {
  const comando = `
    DELETE FROM carros
    WHERE id = ?
  `;

  const [deleted] = await conection.query(comando, [
    carros.id
  ]);

  return deleted.affectedRows;
}
