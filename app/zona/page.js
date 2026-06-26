'use client';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function ZonaCrud() {
  const [zonas, setZonas] = useState([]);
  const [zona, setZona] = useState('');
  const [editandoId, setEditandoId] = useState(null);

  const fetchZonas = async () => {
    const res = await fetch('/api/zona');
    const data = await res.json();
    setZonas(data);
  };

  useEffect(() => { fetchZonas(); }, []);

  const borrar = async (id) => {
    await fetch(`/api/zona/${id}`, { method: 'DELETE' });
    fetchZonas();
  };

  const prepararEdicion = (item) => {
    setZona(item.Zona_Colegio);
    setEditandoId(item.Id_Zona);
  };

  const guardar = async (e) => {
    e.preventDefault();
    if (editandoId) {
      await fetch(`/api/zona/${editandoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Zona_Colegio: zona })
      });
      setEditandoId(null);
    } else {
      await fetch('/api/zona', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Zona_Colegio: zona })
      });
    }
    setZona('');
    fetchZonas();
  };

  return (
    <div className={styles.container}>
      <h1>Gestión de Zona del Colegio (CRUD)</h1>
      <form onSubmit={guardar} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Ej. Urbana"
          value={zona}
          onChange={(e) => setZona(e.target.value)}
          required
        />
        <button type="submit" className={styles.button}>
          {editandoId ? 'Actualizar' : 'Crear'}
        </button>
      </form>
      <div>
        {Array.isArray(zonas) ? (
          zonas.map((item) => (
            <div key={item.Id_Zona} className={styles.card}>
              <span>{item.Zona_Colegio}</span>
              <div>
                <button className={styles.button} onClick={() => prepararEdicion(item)}>Editar</button>
                <button className={`${styles.button} ${styles.buttonDelete}`} onClick={() => borrar(item.Id_Zona)}>Borrar</button>
              </div>
            </div>
          ))
        ) : (
          <p>Cargando datos o hubo un error de conexión con la base de datos...</p>
        )}
      </div>
    </div>
  );
}
