import styles from '@/styles/main.module.css'
import '@/components/Header'

export const metadata = {
  title: 'Груминг | Отзывы',
  description: '',
}

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        Отзывы
      </main>
    </>
  )
}