import Link from "next/link";
import styles from "./page.module.css";

const modulos = [
  { href: "/localidades", titulo: "Localidades", desc: "Gestión de localidades de Bogotá (CRUD)" },
  { href: "/discapacidad", titulo: "Discapacidad", desc: "Gestión de tipos de discapacidad (CRUD)" },
  { href: "/hechos", titulo: "Hechos", desc: "Registro de hechos / beneficiarios (CRUD)" },
  { href: "/sexo", titulo: "Sexo", desc: "Gestión de catálogo de sexo (CRUD)" },
  { href: "/zona", titulo: "Zona Colegio", desc: "Gestión de zona del colegio (CRUD)" },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Proyecto Beneficiarios</h1>
      <p className={styles.subtitle}>
        Sistema de gestión MVC conectado a MySQL. Selecciona un módulo para consultar, crear, actualizar o eliminar registros.
      </p>
      <div className={styles.grid}>
        {modulos.map((m) => (
          <Link key={m.href} href={m.href} className={styles.card}>
            <div className={styles.cardTitle}>{m.titulo}</div>
            <div className={styles.cardDesc}>{m.desc}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
