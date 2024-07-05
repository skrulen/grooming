import styles from '@/styles/login.module.css'
import { useState, useEffect, useRef } from 'react';
import loginStore from '@/stores/loginStore.jsx'
import { observer } from 'mobx-react-lite';
import { FaCheck, FaInstagram } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

export const Login = observer((props) => {
	
	const { loginActive, changeLoginActive } = loginStore;
	const loginRef = useRef(null);

	let [checked, setCheck] = useState(true);
	const changeChecked = () => {setCheck(!checked); console.log(checked)}

	useEffect(() => {
		const handleClickOutsideLogin = (event) => {
			if (loginRef.current && !loginRef.current.contains(event.target) && loginActive) {
				changeLoginActive();
			}
		}

		document.addEventListener('mousedown', handleClickOutsideLogin);

		return () => {
			document.removeEventListener('mousedown', handleClickOutsideLogin);
		}
}, [loginActive]);

	return (
		<div className={` ${styles.fullWrapper} ${loginActive ? styles.active : '' } `}>
			<div className={styles.loginBox} ref={loginRef}>

				<div className={styles.loginSec}>
					<h2 className={styles.title}>Вход</h2>
					<div className={styles.form}>
						<div className={styles.inputBox}>
							<input type="email" name="email" autoComplete={'email'} placeholder={'Номер телефона'} className={styles.input} required></input>
						</div>
						<div className={styles.inputBox}>
							<input type="password" name="password" autoComplete={'password'} placeholder={'Пароль'} className={styles.input} required></input>
							<div className='flex justify-between items-center px-1 mt-4'>
								<label className={styles.label} onClick={changeChecked}>
									<div onClick={(e) => e.stopPropagation()}>
										<input name="remember" type="checkbox" data-marker="login-form/remember/toggle" defaultChecked className={styles.unusedCheckbox}></input>
										<div className={`${styles.checkbox} ${checked ? `${styles.checked}` : ''}`}><FaCheck width="20px"/></div>
									</div>
									<span>Запомнить пароль</span>
								</label>
								<a href="" className={styles.forgetPass}>Забыли пароль?</a>
							</div>
						</div>
						<input type="submit" name="commit" value="Войти" className={styles.submit}></input>
					</div>
				</div>

				<div className={styles.registerSec}>
						<span>Или продолжить через</span>
						<div className={styles.oauth}>
							<FaInstagram size={35} />
							<FaGoogle size={30} />
						</div>
						<span>Нет аккаунта?</span>
						<button className={styles.registerBtn}>Зарегистрироваться</button>
				</div>

			</div>
		</div>
	)
})