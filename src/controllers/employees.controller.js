import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM usuario");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM usuario WHERE id_usu = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM usuario WHERE id_usu = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "usuario not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createEmployee = async (req, res) => {
  try {
    const { nom_usu, dni } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO usuario (nom_usu, dni) VALUES (?, ?)",
      [name, salary]
    );
    res.status(201).json({ id: rows.insertId, nom_usu, dni });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;

    const [result] = await pool.query(
      "UPDATE usuario SET nom_usu = IFNULL(?, nom_usu), dni = IFNULL(?, dni) WHERE id_usu = ?",
      [name, salary, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "usuario not found" });

    const [rows] = await pool.query("SELECT * FROM usuario WHERE id_usu = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

const login = async (req, res) => {
  const { dni, clave } = req.body;

  try {
    // Realizar la consulta a la base de datos
    const result = await pool.query("SELECT * FROM usuario WHERE dni = $1 AND clave = $2", [dni, clave]);

    if (result.rows.length > 0) {
      // Usuario autenticado correctamente
      res.status(200).json({ message: "Inicio de sesión exitoso" });
    } else {
      // Credenciales inválidas
      res.status(401).json({ message: "Credenciales inválidas" });
    }
  } catch (error) {
    console.error("Error en la consulta de inicio de sesión:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

export { login };
