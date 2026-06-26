'use client';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function SexoCrud() {
  const [sexos, setSexos] = useState([]);
  const [sexo, setSexo] = useState('');
  const [editandoId, setEditandoId] = useState(null);

  const fetchSexos = async () => {
    const res = await fetch('/api/sexo');
    const data = await res.json();
    setSexos(data);
  };

  useEffect(() => { fetchSexos(); }, []);

  const borrar = async (id) => {
    await fetch(`/api/sexo/${id}`, { method: 'DELETE' });
    fetchSexos();
  };

  const prepararEdicion = (item) => {
    setSexo(item.Sexo);
    setEditandoId(item.Id_Sexo);
  };

  const guardar = async (e) => {
    e.preventDefault();
    if (editandoId) {
      await fetch(`/api/sexo/${editandoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Sexo: sexo })
      });
      setEditandoId(null);
    } else {
      await fetch('/api/sexo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Sexo: sexo })
      });
    }
    setSexo('');
    fetchSexos();
  };

  return (
    <div className={styles.container}>
      <h1>Gestión de Sexo (CRUD)</h1>
      <form onSubmit={guardar} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Ej. Masculino"
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
          required
        />
        <button type="submit" className={styles.button}>
          {editandoId ? 'Actualizar' : 'Crear'}
        </button>
      </form>
      <div>
        {Array.isArray(sexos) ? (
          sexos.map((item) => (
            <div key={item.Id_Sexo} className={styles.card}>
              <span>{item.Sexo}</span>
              <div>
                <button className={styles.button} onClick={() => prepararEdicion(item)}>Editar</button>
                <button className={`${styles.button} ${styles.buttonDelete}`} onClick={() => borrar(item.Id_Sexo)}>Borrar</button>
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
