'use client';

import styles from '@/styles/header.module.css'
import Link from 'next/link'
import { ListPopup } from './ListPopup'
import { useEffect, useState, useRef } from 'react'

export function Header() {

    let [burgerActive, setBurgerActive] = useState(false);

    const changeBurgerActive = () => {
        setBurgerActive(!burgerActive);
    }

    let [popupActive, setPopupActive] = useState(false);

    const changePopupActive = () => {
        setPopupActive(!popupActive);
    }

    const setPopupInActive = () => {
        setPopupActive(false);
    }

    const hovServices = useRef(null);
    const hovBreeds = useRef(null);
    const hovReviews = useRef(null);
    const holdsServices = useRef(null);
    const holdsBreeds = useRef(null);
    const holdsReviews = useRef(null);

    function check() {
        console.log(popupProps); // Обратите внимание на использование свойства .current
    }

    // const isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent));

    let [time, changeTime] = useState(5);

    const numberHandle = () => {
        navigator.clipboard.writeText('+79962245301')
        if (!popupActive) {
            changePopupActive();

            let timer = setInterval(() => {
                changeTime(--time);
                console.log(time);
            }, 1000);

            setTimeout(() => { 
                setPopupInActive();
                clearInterval(timer);
                changeTime(5);
            }, 5000);     
        }
         
    }

    if (typeof window !== "undefined") {
        window.addEventListener('resize', () => {
            if (
                (document.documentElement.clientWidth > 768) && burgerActive            
            ) changeBurgerActive();
        });
    }
    
    const [popupProps, changePopupProps] = useState({
        type: 'none',
        links: [],
        changesPopup: [hovServices, hovBreeds, hovReviews],
        holdsPopup: [holdsServices, holdsBreeds, holdsReviews]
    });

    function setServicesPopup() {
        changePopupProps(prevState => ({
            ...prevState,
            type: 'services',
            links: ['Груминг', 'Стрижка', 'Причесывание'],
            changesPopup: [hovBreeds, hovReviews],
        }))
    }

    function setBreedsPopup() {
        changePopupProps(prevState => ({
            ...prevState,
            type: 'breeds',
            links: ['Пудель', 'Далматинец', 'Ретривер', 'Овчарка', 'Такса', 'Пекинес', 'Мопс'],
            changesPopup: [hovServices, hovReviews],
        }))
    }

    function setPopupHidden() {
        changePopupProps(prevState => ({
            ...prevState,
            type: 'none',
            changesPopup: [hovServices, hovBreeds],
        }))
    }

    return(
        <>
        <div className={styles.headerBox}>
        <header className={styles.header}>
            <div className={styles.left}>
                <Link href={'/'} className='text-[1.75rem]'>Logo</Link>
            </div>
            <nav className={styles.middle}>
                <ul className={styles.list}>
                    <li className={styles.listElement} ref={holdsServices}><div className={styles.hoverable} onMouseEnter={setServicesPopup} ref={hovServices}><Link href='/services'>Услуги</Link></div></li>
                    <li className={styles.listElement} ref={holdsBreeds}><div className={styles.hoverable} onMouseEnter={setBreedsPopup} ref={hovBreeds}><Link href='/breeds'>Породы</Link></div></li>
                    <li className={styles.listElement} ref={holdsReviews}><div className={styles.hoverable} onMouseEnter={setPopupHidden} ref={hovReviews}><Link href='/reviews'>Отзывы</Link></div></li>
                </ul>
            </nav>
            <div className={styles.right}>
                {/*<Link className='text-[#00f] transition-colors hover:text-[#000099] m-2' href={"tel:+79962245301"} onClick={numberHandle}>+7 996 224 53-01</Link>*/}
                <button className={styles.action}>Записаться</button>
            </div>
            <div className={styles.burger} onClick={changeBurgerActive}>
                <span className={` ${styles.line1} ${styles.line} ${burgerActive ? styles.active : '' } `}></span>
                <span className={` ${styles.line2} ${styles.line} ${burgerActive ? styles.active : '' } `}></span>
            </div>
            <ListPopup props={popupProps}/>
            
        </header>

        </div>

        <div className={`${styles.popup} ${popupActive ? styles.popupActive : styles.popupInactive}`}>
            <div className="text-[#000093] w-[30px] h-[30px]">{time}</div>
            <p>Номер скопирован</p>
        </div>

        <div className={` ${styles.wrapper} ${burgerActive ? styles.active : '' } `} onClick={changeBurgerActive}></div>
        
        <nav className={` ${styles.menu} ${burgerActive ? styles.active : ''} `}>
            <ul className={styles.menuList}>
                <li className={styles.listAction}>Записаться</li>
                <li className={styles.listElement}>Услуги</li>
                <li className={styles.listElement}>Породы</li>
                <li className={styles.listElement}>Отзывы</li>
                <li className={styles.listElement}>Инфо</li>
            </ul>
        </nav>
        
        </>
    )

}
