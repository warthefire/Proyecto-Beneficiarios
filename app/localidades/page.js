// app/localidades/page.js
'use client';

import { useState, useEffect } from 'react';
import styles from './styles.module.css';

const initialForm = { Cod_Localidad: '', Localidad: '' };

export default function LocalidadesCrud() {
  const [localidades, setLocalidades] = useState([]);
  const [formData, setFormData] = useState(initialForm);
  const [editandoId, setEditandoId] = useState(null);

  // READ: carga todas las localidades
  const fetchLocalidades = async () => {
    const res = await fetch('/api/localidades');
    const data = await res.json();
    setLocalidades(data);
  };

  useEffect(() => { fetchLocalidades(); }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // CREATE o UPDATE según si hay editandoId
  const guardar = async (e) => {
    e.preventDefault();
    if (editandoId) {
      await fetch(`/api/localidades/${editandoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } else {
      await fetch('/api/localidades', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    }
    setFormData(initialForm);
    setEditandoId(null);
    fetchLocalidades();
  };

  // Precarga los datos en el formulario para editar (UPDATE)
  const editar = async (id) => {
    const res = await fetch(`/api/localidades/${id}`);
    const data = await res.json();
    setFormData({ Cod_Localidad: data.Cod_Localidad, Localidad: data.Localidad });
    setEditandoId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelar = () => {
    setFormData(initialForm);
    setEditandoId(null);
  };

  // DELETE
  const borrar = async (id) => {
    if (!window.confirm('¿Seguro que deseas borrar esta localidad?')) return;
    await fetch(`/api/localidades/${id}`, { method: 'DELETE' });
    fetchLocalidades();
  };

  return (
    <div className={styles.container}>
      <h1>Gestión de Localidades</h1>

      {/* Formulario INSERT / UPDATE */}
      <form onSubmit={guardar} className={styles.form}>
        <input
          className={styles.input}
          type="number"
          name="Cod_Localidad"
          placeholder="Código"
          value={formData.Cod_Localidad}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="text"
          name="Localidad"
          placeholder="Nombre de la localidad"
          value={formData.Localidad}
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
            <th>Código</th>
            <th>Localidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {localidades.map((loc) => (
            <tr key={loc.Id_Localidad}>
              <td>{loc.Id_Localidad}</td>
              <td>{loc.Cod_Localidad}</td>
              <td>{loc.Localidad}</td>
              <td>
                <button className={`${styles.button} ${styles.buttonEdit}`} onClick={() => editar(loc.Id_Localidad)}>
                  Editar
                </button>
                <button className={`${styles.button} ${styles.buttonDelete}`} onClick={() => borrar(loc.Id_Localidad)}>
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
