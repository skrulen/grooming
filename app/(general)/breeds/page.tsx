import { Header } from '@/components/Header'
import styles from '@/styles/main.module.css'
import '@/components/Header'

export const metadata = {
  title: 'Груминг | Породы',
  description: '',
}

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        Породы
      </main>
    </>
  )
}