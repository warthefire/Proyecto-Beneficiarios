// app/hechos/page.js
'use client'; // Indica que este código corre en el navegador del usuario

import { useState, useEffect } from 'react';
import styles from './styles.module.css'; // Importamos el CSS exclusivo de esta vista

// Valores iniciales vacíos para el formulario (CREATE / UPDATE)
const initialForm = {
  Id_Convocatoria: '',
  Id_Localidad: '',
  Id_Institucion: '',
  Id_Nucleo: '',
  Id_Modalidad: '',
  Id_Sector: '',
  Id_Zona: '',
  Id_Saber11: '',
  Id_Sexo: '',
  Id_Edad: '',
  Id_Grupo_Etnico: '',
  Id_Victima: '',
  Id_Discapacidad: '',
  Id_Sisben: '',
  Cant_beneficiarios: ''
};

export default function HechosCrud() {
  const [hechos, setHechos] = useState([]);
  const [catalogos, setCatalogos] = useState(null);
  const [formData, setFormData] = useState(initialForm);
  const [editandoId, setEditandoId] = useState(null); // null = modo crear, número = modo editar
  const [cargando, setCargando] = useState(true);

  // Trae los registros de Hechos y los catálogos para los <select>
  const fetchDatos = async () => {
    setCargando(true);
    const res = await fetch('/api/hechos'); // Llama al Controlador GET
    const data = await res.json();
    setHechos(data.hechos);
    setCatalogos(data.catalogos);
    setCargando(false);
  };

  // useEffect hace que fetchDatos se ejecute al iniciar la Vista
  useEffect(() => {
    fetchDatos();
  }, []);

  // Actualiza el formulario cuando el usuario cambia un campo
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Función para guardar (CREATE o UPDATE, según editandoId)
  const guardarRegistro = async (e) => {
    e.preventDefault(); // Evita que la página recargue

    if (editandoId) {
      // Modo edición -> llama al Controlador PUT
      await fetch(`/api/hechos/${editandoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } else {
      // Modo creación -> llama al Controlador POST
      await fetch('/api/hechos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    }

    cancelarEdicion(); // Limpia el formulario y vuelve a modo "crear"
    fetchDatos(); // Recarga la lista para mostrar los cambios
  };

  // Carga los datos de un registro existente en el formulario para editarlo
  const editarRegistro = async (id) => {
    const res = await fetch(`/api/hechos/${id}`); // Controlador GET por ID
    const data = await res.json();

    setFormData({
      Id_Convocatoria: data.Id_Convocatoria ?? '',
      Id_Localidad: data.Id_Localidad ?? '',
      Id_Institucion: data.Id_Institucion ?? '',
      Id_Nucleo: data.Id_Nucleo ?? '',
      Id_Modalidad: data.Id_Modalidad ?? '',
      Id_Sector: data.Id_Sector ?? '',
      Id_Zona: data.Id_Zona ?? '',
      Id_Saber11: data.Id_Saber11 ?? '',
      Id_Sexo: data.Id_Sexo ?? '',
      Id_Edad: data.Id_Edad ?? '',
      Id_Grupo_Etnico: data.Id_Grupo_Etnico ?? '',
      Id_Victima: data.Id_Victima ?? '',
      Id_Discapacidad: data.Id_Discapacidad ?? '',
      Id_Sisben: data.Id_Sisben ?? '',
      Cant_beneficiarios: data.Cant_beneficiarios ?? ''
    });
    setEditandoId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Sube la vista al formulario
  };

  // Cancela la edición y limpia el formulario
  const cancelarEdicion = () => {
    setFormData(initialForm);
    setEditandoId(null);
  };

  // Función para borrar (DELETE)
  const borrarRegistro = async (id) => {
    const confirmado = window.confirm('¿Seguro que deseas borrar este registro?');
    if (!confirmado) return;

    await fetch(`/api/hechos/${id}`, { method: 'DELETE' }); // Controlador DELETE
    fetchDatos(); // Recarga la lista
  };

  if (cargando || !catalogos) {
    return <div className={styles.container}><p>Cargando datos...</p></div>;
  }

  return (
    <div className={styles.container}>
      <h1>Gestión de Hechos (Beneficiarios)</h1>

      {/* Formulario para crear o editar un registro */}
      <form onSubmit={guardarRegistro} className={styles.form}>

        <div className={styles.field}>
          <label>Convocatoria</label>
          <select className={styles.select} name="Id_Convocatoria" value={formData.Id_Convocatoria} onChange={handleChange} required>
            <option value="">-- Seleccione --</option>
            {catalogos.convocatoria.map((item) => (
              <option key={item.Id_Convocatoria} value={item.Id_Convocatoria}>{item.Convocatoria}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label>Localidad</label>
          <select className={styles.select} name="Id_Localidad" value={formData.Id_Localidad} onChange={handleChange} required>
            <option value="">-- Seleccione --</option>
            {catalogos.localidad.map((item) => (
              <option key={item.Id_Localidad} value={item.Id_Localidad}>{item.Localidad}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label>Institución</label>
          <select className={styles.select} name="Id_Institucion" value={formData.Id_Institucion} onChange={handleChange} required>
            <option value="">-- Seleccione --</option>
            {catalogos.institucion.map((item) => (
              <option key={item.Id_Institucion} value={item.Id_Institucion}>{item.Nom_institucion}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label>Núcleo Básico</label>
          <select className={styles.select} name="Id_Nucleo" value={formData.Id_Nucleo} onChange={handleChange} required>
            <option value="">-- Seleccione --</option>
            {catalogos.nucleo.map((item) => (
              <option key={item.Id_Nucleo} value={item.Id_Nucleo}>{item.Nucleo_basico}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label>Modalidad</label>
          <select className={styles.select} name="Id_Modalidad" value={formData.Id_Modalidad} onChange={handleChange} required>
            <option value="">-- Seleccione --</option>
            {catalogos.modalidad.map((item) => (
              <option key={item.Id_Modalidad} value={item.Id_Modalidad}>{item.Modalidad}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label>Sector</label>
          <select className={styles.select} name="Id_Sector" value={formData.Id_Sector} onChange={handleChange} required>
            <option value="">-- Seleccione --</option>
            {catalogos.sector.map((item) => (
              <option key={item.Id_Sector} value={item.Id_Sector}>{item.Sector_Colegio}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label>Zona Colegio</label>
          <select className={styles.select} name="Id_Zona" value={formData.Id_Zona} onChange={handleChange} required>
            <option value="">-- Seleccione --</option>
            {catalogos.zona.map((item) => (
              <option key={item.Id_Zona} value={item.Id_Zona}>{item.Zona_Colegio}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label>Saber 11</label>
          <select className={styles.select} name="Id_Saber11" value={formData.Id_Saber11} onChange={handleChange} required>
            <option value="">-- Seleccione --</option>
            {catalogos.saber11.map((item) => (
              <option key={item.Id_Saber11} value={item.Id_Saber11}>{item.Rango}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label>Sexo</label>
          <select className={styles.select} name="Id_Sexo" value={formData.Id_Sexo} onChange={handleChange} required>
            <option value="">-- Seleccione --</option>
            {catalogos.sexo.map((item) => (
              <option key={item.Id_Sexo} value={item.Id_Sexo}>{item.Sexo}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label>Edad</label>
          <select className={styles.select} name="Id_Edad" value={formData.Id_Edad} onChange={handleChange} required>
            <option value="">-- Seleccione --</option>
            {catalogos.edad.map((item) => (
              <option key={item.Id_Edad} value={item.Id_Edad}>{item.Edad}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label>Grupo Étnico</label>
          <select className={styles.select} name="Id_Grupo_Etnico" value={formData.Id_Grupo_Etnico} onChange={handleChange} required>
            <option value="">-- Seleccione --</option>
            {catalogos.grupoEtnico.map((item) => (
              <option key={item.Id_Grupo_Etnico} value={item.Id_Grupo_Etnico}>{item.Grupo_Etnico}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label>Víctima del Conflicto</label>
          <select className={styles.select} name="Id_Victima" value={formData.Id_Victima} onChange={handleChange} required>
            <option value="">-- Seleccione --</option>
            {catalogos.victima.map((item) => (
              <option key={item.Id_Victima} value={item.Id_Victima}>{item.Victima}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label>Discapacidad</label>
          <select className={styles.select} name="Id_Discapacidad" value={formData.Id_Discapacidad} onChange={handleChange} required>
            <option value="">-- Seleccione --</option>
            {catalogos.discapacidad.map((item) => (
              <option key={item.Id_Discapacidad} value={item.Id_Discapacidad}>{item.Discapacidad}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label>Sisbén</label>
          <select className={styles.select} name="Id_Sisben" value={formData.Id_Sisben} onChange={handleChange} required>
            <option value="">-- Seleccione --</option>
            {catalogos.sisben.map((item) => (
              <option key={item.Id_Sisben} value={item.Id_Sisben}>{item.Grupo}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label>Cantidad de Beneficiarios</label>
          <input
            className={styles.input}
            type="number"
            name="Cant_beneficiarios"
            value={formData.Cant_beneficiarios}
            onChange={handleChange}
            min="0"
            required
          />
        </div>

        <div className={styles.formActions}>
          <button type="submit" className={styles.button}>
            {editandoId ? 'Actualizar Registro' : 'Crear Registro'}
          </button>
          {editandoId && (
            <button type="button" className={`${styles.button} ${styles.buttonCancel}`} onClick={cancelarEdicion}>
              Cancelar Edición
            </button>
          )}
        </div>
      </form>

      {/* Tabla donde se dibujan los registros leídos de la BD, con nombres legibles */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Convocatoria</th>
              <th>Localidad</th>
              <th>Institución</th>
              <th>Núcleo</th>
              <th>Modalidad</th>
              <th>Sector</th>
              <th>Zona</th>
              <th>Saber 11</th>
              <th>Sexo</th>
              <th>Edad</th>
              <th>Grupo Étnico</th>
              <th>Víctima</th>
              <th>Discapacidad</th>
              <th>Sisbén</th>
              <th>Cant. Benef.</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {hechos.map((h) => (
              <tr key={h.Id_Hechos}>
                <td>{h.Id_Hechos}</td>
                <td>{h.Convocatoria}</td>
                <td>{h.Localidad}</td>
                <td>{h.Institucion}</td>
                <td>{h.Nucleo}</td>
                <td>{h.Modalidad}</td>
                <td>{h.Sector}</td>
                <td>{h.Zona}</td>
                <td>{h.Saber11}</td>
                <td>{h.Sexo}</td>
                <td>{h.Edad}</td>
                <td>{h.GrupoEtnico}</td>
                <td>{h.Victima}</td>
                <td>{h.Discapacidad}</td>
                <td>{h.Sisben}</td>
                <td>{h.Cant_beneficiarios}</td>
                <td>
                  <button className={`${styles.button} ${styles.buttonEdit}`} onClick={() => editarRegistro(h.Id_Hechos)}>
                    Editar
                  </button>
                  <button className={`${styles.button} ${styles.buttonDelete}`} onClick={() => borrarRegistro(h.Id_Hechos)}>
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
