import { conection } from "./conection.js";


export async function listarPizza() {
  const comando = `
    SELECT *
      FROM pizzas
  `

  const [registros] = await conection.query(comando)
  return registros;
}

export async function inserirPizza(Pizza) {
  const comando = `
    INSERT INTO pizzas (sabor, tamanho, preco)
    VALUES (?, ?, ?);
  `;

  const [info] = await conection.query(comando, [
    Pizza.sabor,
    Pizza.tamanho,
    Pizza.preco,
  ]);

  return info.insertId;
}

export async function deletarPizza(pizza) {
  const comando = `
    DELETE FROM pizzas
    WHERE id = ?
  `;

  const [deleted] = await conection.query(comando, [
    pizza.id
  ]);

  return deleted.affectedRows;
}
