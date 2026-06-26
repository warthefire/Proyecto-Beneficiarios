import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>Proyecto Beneficiarios</Link>
      <nav className={styles.nav}>
        <Link href="/localidades" className={styles.link}>Localidades</Link>
        <Link href="/discapacidad" className={styles.link}>Discapacidad</Link>
        <Link href="/hechos" className={styles.link}>Hechos</Link>
        <Link href="/sexo" className={styles.link}>Sexo</Link>
        <Link href="/zona" className={styles.link}>Zona Colegio</Link>
      </nav>
    </header>
  );
}
