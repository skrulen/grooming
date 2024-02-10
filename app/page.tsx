import Header from '@/components/Header'
import styles from '@/styles/main.module.css'
import { ImageFeed } from '@/components/teaser';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        
        <section className={styles.hero}>
          <h1 className={styles.title}>
            Привнесите <span>стиль и уход в </span>
            <span>мир вашего питомца</span>
            </h1>
          <div className={styles.teaserWrapper}>
            { ImageFeed() }
          </div>
        </section>
      </main>
    </>
  )
}