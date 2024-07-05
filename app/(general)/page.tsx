import { Header } from '@/components/Header'
import styles from '@/styles/main.module.css'
import { ImageFeed } from '@/components/Teaser'

export default function Home() {
  return (
    <>
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
        <section className={styles.about}>
          <p className='text-5xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum reiciendis facilis cumque quaerat, aliquid praesentium. Nisi repellendus ratione, esse hic odio, quisquam molestiae dolore enim deserunt, nemo ad facilis atque tenetur necessitatibus amet eaque quidem dicta illum aliquam totam cumque provident qui sapiente non. Nemo esse dolore id ratione quae.</p>
        </section>
      </main>
    </>
  )
}