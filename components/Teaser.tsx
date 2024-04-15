import Image from 'next/image'
import styles from '@/styles/teaser.module.css'

export function ImageFeed() {
	let imageFeed: JSX.Element[] = [];

	for (let i = 1; i <= 3; i++) {
	for (let j = 1; j <= 9; j++) {
		const key = 9*(j-1) + j-1;
		imageFeed.push(
		<picture key={key}>
      <source media="(max-width: 768px)" srcSet={`/images/main/touch/groomer${j}.webp`} />
      <source media="(min-width: 769px)" srcSet={`/images/main/desktop/groomer${j}.webp`} />
			<Image
        src="/images/main/touch/groomer1.webp"
        alt="Description of the image"
        width={0}
        height={0}
				className={styles.image}
				loading="lazy"
      />
    </picture>)
	}}

	return(
		<div className={styles.teaser}>
			<figure className={styles.imageList}>
				{ imageFeed }
			</figure>
		</div>
	);
}