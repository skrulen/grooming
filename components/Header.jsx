'use client';

import styles from '@/styles/header.module.css'
import { useState, useRef } from 'react'
import { ListPopup } from './ListPopup'
import Link from 'next/link'
import { observer } from 'mobx-react-lite';


export const Header = observer(() => {

    let [burgerActive, setBurgerActive] = useState(false);

    const changeBurgerActive = () => {
        setBurgerActive(!burgerActive);
    }

    {/** 
    let [popupActive, setPopupActive] = useState(false);

    const changePopupActive = () => {
        setPopupActive(!popupActive);
    }

    const setPopupInActive = () => {
        setPopupActive(false);
    }
*/}

    //  Hack, but it works
    const hovServices = useRef(null);
    const holdsServices = useRef(null);
    const holdsReviews = useRef(null);

    if (typeof document !== 'undefined') {
        document.addEventListener('mousedown', function (event) {
            if (event.button === 1) {
                console.log(1);
            }
        });
    }

    {/*
    const isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent));

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
*/}

    if (typeof window !== 'undefined') {
        window.addEventListener('resize', () => {
            if (
                (document.documentElement.clientWidth > 768) && burgerActive
            ) changeBurgerActive();
        });
    }

    const [popupProps, changePopupProps] = useState({
        type: 'none',
        links: [],
        changesPopup: [hovServices],
        holdsPopup: [holdsServices, holdsReviews]
    });

    function setServicesPopup() {
        changePopupProps(prevState => ({
            ...prevState,
            type: 'services',
            links: ['Груминг', 'Стрижка', 'Причесывание'],
            changesPopup: [],
        }))
    }

    function setPopupHidden() {
        changePopupProps(prevState => ({
            ...prevState,
            type: 'none',
            changesPopup: [hovServices],
        }))
    }

    return (
        <>

            <div className={styles.headerBox}>
                <header className={styles.header}>
                    <div className={styles.left}>
                        <Link href={'/'} className='text-[1.75rem]'>Logo</Link>
                    </div>
                    <nav className={styles.middle}>
                        <ul className={styles.list}>
                            <li className={styles.listElement} ref={holdsServices}><div className={styles.hoverable} onMouseEnter={setServicesPopup} ref={hovServices}><div><Link href='/services'>Услуги</Link></div></div></li>
                            <li className={styles.listElement} ref={holdsReviews}><div className={styles.hoverable} onMouseEnter={setPopupHidden}><div><Link href='/reviews'>Отзывы</Link></div></div></li>
                        </ul>
                    </nav>
                    <div className={styles.right}>
                        {/*<Link className='text-[#00f] transition-colors hover:text-[#000099] m-2' href={"tel:+79962245301"} onClick={numberHandle}>+7 996 224 53-01</Link>*/}
                        <button className={styles.action}><Link href={'https://link.tetradka.io/box/71486'}>Записаться</Link></button>
                    </div>
                    <div className={styles.burger} onClick={changeBurgerActive}>
                        <span className={` ${styles.line1} ${styles.line} ${burgerActive ? styles.active : ''} `}></span>
                        <span className={` ${styles.line2} ${styles.line} ${burgerActive ? styles.active : ''} `}></span>
                    </div>
                    <ListPopup props={popupProps} />

                </header>

            </div>

            {/*
        <div className={`${styles.popup} ${popupActive ? styles.popupActive : styles.popupInactive}`}>
            <div className="text-[#000093] w-[30px] h-[30px]">{time}</div>
            <p>Номер скопирован</p>
        </div>
*/}

            <div className={` ${styles.wrapper} ${burgerActive ? styles.active : ''} `} onClick={changeBurgerActive}></div>

            <nav className={` ${styles.menu} ${burgerActive ? styles.active : ''} `}>
                <ul className={styles.menuList}>
                    <li className={styles.listAction}>
                        <Link href={'https://link.tetradka.io/box/71486'}>Записаться</Link>
                    </li>
                    <li className={styles.listElement}><Link href={'services'}>Услуги</Link></li>
                    <li className={styles.listElement}><Link href={'reviews'}>Отзывы</Link></li>
                </ul>
            </nav>

        </>
    )

})
