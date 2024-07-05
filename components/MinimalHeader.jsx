import styles from '@/styles/minimalHeader.module.css'
import Link from 'next/link'

export function MinimalHeader() {
	return(
		<header className={styles.header}>
			<Link href={'/'} className={styles.logo}>Logo</Link>
			<div></div>
		</header>
	)
}