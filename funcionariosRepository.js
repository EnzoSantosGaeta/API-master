import { conection } from "./conection.js";


export async function listarFuncionario() {
  const comando = `
    SELECT *
      FROM funcionarios
  `

  const [registros] = await conection.query(comando)
  return registros;
}

export async function inserirFuncionario(Funcionario) {
  const comando = `
    INSERT INTO funcionarios (nome, cargo, salario, departamento)
    VALUES (?, ?, ?, ?);
  `;

  const [info] = await conection.query(comando, [
    Funcionario.nome,
    Funcionario.cargo,
    Funcionario.salario,
    Funcionario.departamento
  ]);

  return info.insertId;
}

export async function deletarFuncionario(funcionario) {
  const comando = `
    DELETE FROM funcionarios
    WHERE id = ?
  `;

  const [deleted] = await conection.query(comando, [
    funcionario.id
  ]);

  return deleted.affectedRows;
}
