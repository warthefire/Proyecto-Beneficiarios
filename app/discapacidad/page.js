// app/discapacidad/page.js
'use client';

import { useState, useEffect } from 'react';
import styles from './styles.module.css';

const initialForm = { Discapacidad: '' };

export default function DiscapacidadCrud() {
  const [discapacidades, setDiscapacidades] = useState([]);
  const [formData, setFormData] = useState(initialForm);
  const [editandoId, setEditandoId] = useState(null);

  // READ: carga todas las discapacidades
  const fetchDiscapacidades = async () => {
    const res = await fetch('/api/discapacidad');
    const data = await res.json();
    setDiscapacidades(data);
  };

  useEffect(() => { fetchDiscapacidades(); }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // CREATE o UPDATE según si hay editandoId
  const guardar = async (e) => {
    e.preventDefault();
    if (editandoId) {
      await fetch(`/api/discapacidad/${editandoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } else {
      await fetch('/api/discapacidad', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    }
    setFormData(initialForm);
    setEditandoId(null);
    fetchDiscapacidades();
  };

  // Precarga los datos en el formulario para editar (UPDATE)
  const editar = async (id) => {
    const res = await fetch(`/api/discapacidad/${id}`);
    const data = await res.json();
    setFormData({ Discapacidad: data.Discapacidad });
    setEditandoId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelar = () => {
    setFormData(initialForm);
    setEditandoId(null);
  };

  // DELETE
  const borrar = async (id) => {
    if (!window.confirm('¿Seguro que deseas borrar esta discapacidad?')) return;
    await fetch(`/api/discapacidad/${id}`, { method: 'DELETE' });
    fetchDiscapacidades();
  };

  return (
    <div className={styles.container}>
      <h1>Gestión de Discapacidades</h1>

      {/* Formulario INSERT / UPDATE */}
      <form onSubmit={guardar} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          name="Discapacidad"
          placeholder="Nombre de la discapacidad"
          value={formData.Discapacidad}
          onChange={handleChange}
          required
        />
        <button type="submit" className={styles.button}>
          {editandoId ? 'Actualizar' : 'Crear'}
        </button>
        {editandoId && (
          <button type="button" className={`${styles.button} ${styles.buttonCancel}`} onClick={cancelar}>
            Cancelar
          </button>
        )}
      </form>

      {/* Tabla READ */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Discapacidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {discapacidades.map((d) => (
            <tr key={d.Id_Discapacidad}>
              <td>{d.Id_Discapacidad}</td>
              <td>{d.Discapacidad}</td>
              <td>
                <button className={`${styles.button} ${styles.buttonEdit}`} onClick={() => editar(d.Id_Discapacidad)}>
                  Editar
                </button>
                <button className={`${styles.button} ${styles.buttonDelete}`} onClick={() => borrar(d.Id_Discapacidad)}>
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
