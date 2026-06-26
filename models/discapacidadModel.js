// models/discapacidadModel.js
import pool from '../db/connection';

const DiscapacidadModel = {
  // 1. LEER (READ): Obtener todas las discapacidades
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM Discapacidad ORDER BY Id_Discapacidad ASC');
    return rows;
  },

  // Obtener una discapacidad por ID (para precargar el formulario de edición)
  getById: async (Id_Discapacidad) => {
    const [rows] = await pool.query('SELECT * FROM Discapacidad WHERE Id_Discapacidad = ?', [Id_Discapacidad]);
    return rows[0];
  },

  // 2. CREAR (CREATE): Insertar una nueva discapacidad
  create: async (Discapacidad) => {
    const query = 'INSERT INTO Discapacidad (Discapacidad) VALUES (?)';
    const [result] = await pool.query(query, [Discapacidad]);
    return result;
  },

  // 3. ACTUALIZAR (UPDATE): Modificar una discapacidad existente
  update: async (Id_Discapacidad, Discapacidad) => {
    const query = 'UPDATE Discapacidad SET Discapacidad = ? WHERE Id_Discapacidad = ?';
    const [result] = await pool.query(query, [Discapacidad, Id_Discapacidad]);
    return result;
  },

  // 4. BORRAR (DELETE): Eliminar una discapacidad
  delete: async (Id_Discapacidad) => {
    const [result] = await pool.query('DELETE FROM Discapacidad WHERE Id_Discapacidad = ?', [Id_Discapacidad]);
    return result;
  }
};

export default DiscapacidadModel;
