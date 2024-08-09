import styles from '@/styles/services/main.module.css'
import '@/components/Header'
import { BreedSetter } from '@/components/services/BreedSetter'
import { BreedList } from '@/components/services/BreedList'

export const metadata = {
  title: 'Груминг | Услуги',
  description: '',
}

export default function Services() {


  return (
    <>
      <BreedSetter />
      <main className={styles.main}>
        <BreedList />
      </main>
    </>
  )
}