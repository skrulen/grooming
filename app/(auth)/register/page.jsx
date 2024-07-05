import styles from '@/styles/login.module.css'

export const metadata = {
  title: 'Груминг | Логин',
  description: '',
}

export default function Login() {
	return (
		<main className={styles.main}>
			<div className={styles.loginBox}>
				<div className={styles.title}>
					<h2 className='text-4xl font-bold'>Вход</h2>
				</div>
				<div className={styles.form}>
					<div className={styles.inputBox}>
						<label htmlFor="email" className={styles.label}>Номер телефона</label>
						<input type="email" name="email" id="email" autocomplete="email" className={styles.input}required></input>
					</div>
					<div className={styles.inputBox}>
						<label htmlFor="email" className={styles.label}>Пароль</label>
						<input type="email" name="email" id="email" autocomplete="email" className={styles.input}required></input>
					</div>
					<input type="submit" name="commit" value="Войти" className={styles.submit} data-testid="login-button" data-disable-with="Log in"></input>
				</div>
			</div>
		</main>
	)
}