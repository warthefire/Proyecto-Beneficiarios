import pool from '../db/connection';

const SexoModel = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM Sexo');
    return rows;
  },

  create: async (Sexo) => {
    const query = 'INSERT INTO Sexo (Sexo) VALUES (?)';
    const [result] = await pool.query(query, [Sexo]);
    return result;
  },

  update: async (Id_Sexo, Sexo) => {
    const query = 'UPDATE Sexo SET Sexo = ? WHERE Id_Sexo = ?';
    const [result] = await pool.query(query, [Sexo, Id_Sexo]);
    return result;
  },

  delete: async (Id_Sexo) => {
    const query = 'DELETE FROM Sexo WHERE Id_Sexo = ?';
    const [result] = await pool.query(query, [Id_Sexo]);
    return result;
  }
};

export default SexoModel;
