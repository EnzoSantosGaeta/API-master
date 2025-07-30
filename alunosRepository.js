import { conection } from "./conection.js";


export async function listarCursos() {
  const comando = `
    SELECT *
      FROM cursos
  `

  const [registros] = await conection.query(comando)
  return registros;
}

export async function inserirCurso(novoCurso) {
  const comando = `
    INSERT INTO cursos (nome, carga_horaria, area)
               values (?, ?, ?);
  `
  

  const [info] = await conection.query(comando, [novoCurso.nome, novoCurso.carga_horaria, novoCurso.area])
  return info.insertId;
}
