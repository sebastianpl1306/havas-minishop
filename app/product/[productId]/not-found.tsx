import Link from 'next/link';
import styles from '@/src/styles/not-found.module.css';
 
export default function NotFound() {
  return (
    <div className={styles['not-found']}>
      <h2>Not Found</h2>
      <p>No se encontró el producto solicitado</p>
      <Link href="/">Volver al inicio</Link>
    </div>
  )
}