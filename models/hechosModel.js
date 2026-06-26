// models/hechosModel.js
import pool from '../db/connection';
 
const HechosModel = {
  // 1. LEER (READ): todos los registros de Hechos con nombres legibles (JOIN)
  getAll: async () => {
    const query = `
      SELECT 
        h.Id_Hechos,
        h.Cant_beneficiarios,
        c.Convocatoria AS Convocatoria,
        l.Localidad AS Localidad,
        i.Nom_institucion AS Institucion,
        n.Nucleo_basico AS Nucleo,
        m.Modalidad AS Modalidad,
        s.Sector_Colegio AS Sector,
        z.Zona_Colegio AS Zona,
        sb.Rango AS Saber11,
        sx.Sexo AS Sexo,
        e.Edad AS Edad,
        ge.Grupo_Etnico AS GrupoEtnico,
        v.Victima AS Victima,
        d.Discapacidad AS Discapacidad,
        si.Grupo AS Sisben
      FROM Hechos h
      LEFT JOIN Convocatoria c ON h.Id_Convocatoria = c.Id_Convocatoria
      LEFT JOIN Localidad l ON h.Id_Localidad = l.Id_Localidad
      LEFT JOIN Institucion i ON h.Id_Institucion = i.Id_Institucion
      LEFT JOIN Nucleo_Basico n ON h.Id_Nucleo = n.Id_Nucleo
      LEFT JOIN Modalidad m ON h.Id_Modalidad = m.Id_Modalidad
      LEFT JOIN Sector s ON h.Id_Sector = s.Id_Sector
      LEFT JOIN Zona_colegio z ON h.Id_Zona = z.Id_Zona
      LEFT JOIN Saber11 sb ON h.Id_Saber11 = sb.Id_Saber11
      LEFT JOIN Sexo sx ON h.Id_Sexo = sx.Id_Sexo
      LEFT JOIN Edad e ON h.Id_Edad = e.Id_Edad
      LEFT JOIN Grupo_etnico ge ON h.Id_Grupo_Etnico = ge.Id_Grupo_Etnico
      LEFT JOIN Victima v ON h.Id_Victima = v.Id_Victima
      LEFT JOIN Discapacidad d ON h.Id_Discapacidad = d.Id_Discapacidad
      LEFT JOIN Sisben si ON h.Id_Sisben = si.Id_Sisben
      ORDER BY h.Id_Hechos DESC
    `;
    const [rows] = await pool.query(query);
    return rows;
  },
 
  // Trae un solo registro por ID (para precargar el formulario de edición)
  getById: async (Id_Hechos) => {
    const [rows] = await pool.query('SELECT * FROM Hechos WHERE Id_Hechos = ?', [Id_Hechos]);
    return rows[0];
  },
 
  // Trae todos los catálogos a la vez, para llenar los <select> del formulario
  getCatalogos: async () => {
    const [convocatoria] = await pool.query('SELECT * FROM Convocatoria');
    const [localidad] = await pool.query('SELECT * FROM Localidad');
    const [institucion] = await pool.query('SELECT * FROM Institucion');
    const [nucleo] = await pool.query('SELECT * FROM Nucleo_Basico');
    const [modalidad] = await pool.query('SELECT * FROM Modalidad');
    const [sector] = await pool.query('SELECT * FROM Sector');
    const [zona] = await pool.query('SELECT * FROM Zona_colegio');
    const [saber11] = await pool.query('SELECT * FROM Saber11');
    const [sexo] = await pool.query('SELECT * FROM Sexo');
    const [edad] = await pool.query('SELECT * FROM Edad');
    const [grupoEtnico] = await pool.query('SELECT * FROM Grupo_etnico');
    const [victima] = await pool.query('SELECT * FROM Victima');
    const [discapacidad] = await pool.query('SELECT * FROM Discapacidad');
    const [sisben] = await pool.query('SELECT * FROM Sisben');
 
    return {
      convocatoria, localidad, institucion, nucleo, modalidad,
      sector, zona, saber11, sexo, edad, grupoEtnico, victima,
      discapacidad, sisben
    };
  },
 
  // 2. CREAR (CREATE)
  create: async (data) => {
    const query = `
      INSERT INTO Hechos 
      (Id_Convocatoria, Id_Localidad, Id_Institucion, Id_Nucleo, Id_Modalidad,
       Id_Sector, Id_Zona, Id_Saber11, Id_Sexo, Id_Edad, Id_Grupo_Etnico,
       Id_Victima, Id_Discapacidad, Id_Sisben, Cant_beneficiarios)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [
      data.Id_Convocatoria, data.Id_Localidad, data.Id_Institucion, data.Id_Nucleo,
      data.Id_Modalidad, data.Id_Sector, data.Id_Zona, data.Id_Saber11, data.Id_Sexo,
      data.Id_Edad, data.Id_Grupo_Etnico, data.Id_Victima, data.Id_Discapacidad,
      data.Id_Sisben, data.Cant_beneficiarios
    ];
    const [result] = await pool.query(query, params);
    return result;
  },
 
  // 3. ACTUALIZAR (UPDATE)
  update: async (Id_Hechos, data) => {
    const query = `
      UPDATE Hechos SET
        Id_Convocatoria = ?, Id_Localidad = ?, Id_Institucion = ?, Id_Nucleo = ?,
        Id_Modalidad = ?, Id_Sector = ?, Id_Zona = ?, Id_Saber11 = ?, Id_Sexo = ?,
        Id_Edad = ?, Id_Grupo_Etnico = ?, Id_Victima = ?, Id_Discapacidad = ?,
        Id_Sisben = ?, Cant_beneficiarios = ?
      WHERE Id_Hechos = ?
    `;
    const params = [
      data.Id_Convocatoria, data.Id_Localidad, data.Id_Institucion, data.Id_Nucleo,
      data.Id_Modalidad, data.Id_Sector, data.Id_Zona, data.Id_Saber11, data.Id_Sexo,
      data.Id_Edad, data.Id_Grupo_Etnico, data.Id_Victima, data.Id_Discapacidad,
      data.Id_Sisben, data.Cant_beneficiarios, Id_Hechos
    ];
    const [result] = await pool.query(query, params);
    return result;
  },
 
  // 4. BORRAR (DELETE)
  delete: async (Id_Hechos) => {
    const [result] = await pool.query('DELETE FROM Hechos WHERE Id_Hechos = ?', [Id_Hechos]);
    return result;
  }
};
 
export default HechosModel;