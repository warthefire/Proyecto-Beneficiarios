// models/localidadModel.js
import pool from '../db/connection';

const LocalidadModel = {
  // 1. LEER (READ): Obtener todas las localidades
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM Localidad ORDER BY Id_Localidad ASC');
    return rows;
  },

  // Obtener una localidad por ID (para precargar el formulario de edición)
  getById: async (Id_Localidad) => {
    const [rows] = await pool.query('SELECT * FROM Localidad WHERE Id_Localidad = ?', [Id_Localidad]);
    return rows[0];
  },

  // 2. CREAR (CREATE): Insertar una nueva localidad
  create: async (Cod_Localidad, Localidad) => {
    const query = 'INSERT INTO Localidad (Cod_Localidad, Localidad) VALUES (?, ?)';
    const [result] = await pool.query(query, [Cod_Localidad, Localidad]);
    return result;
  },

  // 3. ACTUALIZAR (UPDATE): Modificar una localidad existente
  update: async (Id_Localidad, Cod_Localidad, Localidad) => {
    const query = 'UPDATE Localidad SET Cod_Localidad = ?, Localidad = ? WHERE Id_Localidad = ?';
    const [result] = await pool.query(query, [Cod_Localidad, Localidad, Id_Localidad]);
    return result;
  },

  // 4. BORRAR (DELETE): Eliminar una localidad
  delete: async (Id_Localidad) => {
    const [result] = await pool.query('DELETE FROM Localidad WHERE Id_Localidad = ?', [Id_Localidad]);
    return result;
  }
};

export default LocalidadModel;
