'use client';

import styles from '@/styles/header.module.css'
import { useState, useRef } from 'react'
import { ListPopup } from './ListPopup'
import Link from 'next/link'
import { observer } from 'mobx-react-lite';
import Image from 'next/image';

export const Header = observer(() => {

    let [burgerActive, setBurgerActive] = useState(false);

    const changeBurgerActive = () => {
        setBurgerActive(!burgerActive);
    }

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
                        <Link href={'/'} className='h-full flex justify-center items-center'>
                            <Image
                                src="/fullLogo.webp"
                                alt="Description of the image"
                                width={100}
                                height={100}
                                priority={false}
                                loading="lazy"
                                className={styles.logo}
                            />
                        </Link>
                    </div>
                    <nav className={styles.middle}>
                        <ul className={styles.list}>
                            <li className={styles.listElement} ref={holdsServices}><div className={styles.hoverable} onMouseEnter={setServicesPopup} ref={hovServices}><div><Link href='/services'>Услуги</Link></div></div></li>
                            <li className={styles.listElement} ref={holdsReviews}><div className={styles.hoverable} onMouseEnter={setPopupHidden}><div><Link href='/reviews'>Отзывы</Link></div></div></li>
                        </ul>
                    </nav>
                    <div className={styles.right}>
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
