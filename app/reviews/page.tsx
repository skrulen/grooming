import styles from '@/styles/reviews/main.module.css'
import '@/components/Header'
import { ReviewsBlock } from '@/components/reviews/ReviewsBlock'

export const metadata = {
  title: 'Груминг | Отзывы',
  description: '',
}

export default function Home() {

  return (
    <>
      <main className={styles.main}>
        <h2 className='text-[#00f]'>Отзывы</h2>
        <ReviewsBlock />
      </main>
    </>
  )
}