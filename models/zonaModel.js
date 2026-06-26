import pool from '../db/connection';

const ZonaModel = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM Zona_colegio');
    return rows;
  },

  create: async (Zona_Colegio) => {
    const query = 'INSERT INTO Zona_colegio (Zona_Colegio) VALUES (?)';
    const [result] = await pool.query(query, [Zona_Colegio]);
    return result;
  },

  update: async (Id_Zona, Zona_Colegio) => {
    const query = 'UPDATE Zona_colegio SET Zona_Colegio = ? WHERE Id_Zona = ?';
    const [result] = await pool.query(query, [Zona_Colegio, Id_Zona]);
    return result;
  },

  delete: async (Id_Zona) => {
    const query = 'DELETE FROM Zona_colegio WHERE Id_Zona = ?';
    const [result] = await pool.query(query, [Id_Zona]);
    return result;
  }
};

export default ZonaModel;
