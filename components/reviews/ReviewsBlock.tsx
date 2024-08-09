'use client'

import { useEffect, useState } from "react"
import reviewsData from './reviewsData.json'
import styles from '@/styles/reviews/reviewsBlock.module.css'
import { AvatarNoPicture } from "./AvatarNoPicture"
import Rating from "./Rating"

interface Review {
  reviewID: number;
  rating: number;
  message: string;
  name: string;
  avatar: string;
  data: string;
}

export function ReviewsBlock() {
  const [reviews, setReviews] = useState<Review[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch('https://tetradka.io/api/link/71486/reviews?take=100')
      // const data = await response.json()
      const data: Review[] = reviewsData;
      setReviews(data)
    }
    fetchData()
  }, [])

  if (!reviews) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.reviewsContainer}>
      {reviews.map(review => (
        <div key={review.reviewID} className={styles.review}>
          <div className={styles.top}>
            { review.avatar ? <img className={styles.avatar} src={review.avatar} alt={`${review.name}'s avatar`} /> : <AvatarNoPicture styles={styles.avatar} /> }
            <div className={styles.topRight}>
              <h3 className={styles.name}>{review.name}</h3>
              <p className={styles.date}>{review.data}</p>
            </div>
          </div>

          <p className={styles.message}>{review.message}</p>
          <div className={styles.rating}> <Rating rating={review.rating} /></div>

        </div>
      ))}
    </div>
  )
}
