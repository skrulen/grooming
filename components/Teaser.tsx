import Image from 'next/image'
import styles from '@/styles/teaser.module.css'

export function ImageFeed() {
	let imageFeed: JSX.Element[] = [];

	for (let i = 1; i <= 3; i++) {
	for (let i = 1; i <= 9; i++) {
		imageFeed.push(
		<Image
			src={`/images/main/groomer${i}.webp`}
			width={500}
			height={500}
			alt='groomer works'
			className={styles.image}
		/>)
	}}

	return(
		<div className={styles.teaser}>
			<figure className={styles.imageList}>
				{ imageFeed }
			</figure>
		</div>
	);
}