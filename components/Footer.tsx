'use client';
import styles from '@/styles/footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Footer() {
  let [popupActive, setPopupActive] = useState(false);
  const changePopupActive = () => {
    setPopupActive(!popupActive);
  };

  const setPopupInActive = () => {
    setPopupActive(false);
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof navigator !== "undefined") {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent));
    }
  }, []);

  let [time, changeTime] = useState(5);

  const numberHandle = () => {
    if (isMobile && typeof navigator !== "undefined") return;
    navigator.clipboard.writeText('+79026927051');
    if (!popupActive) {
      changePopupActive();

      let timer = setInterval(() => {
        changeTime((prev) => prev - 1);
      }, 1000);

      setTimeout(() => {
        setPopupInActive();
        clearInterval(timer);
        changeTime(5);
      }, 5000);
    }
  };

  const openMaps = () => {
    const dGisUrl = 'dgis://surgut/firm/70000001082362619';
    const yandexMapsUrl = 'yandexmaps://maps.yandex.ru/?oid=147481956240';
    const webUrl = 'https://2gis.ru/surgut/firm/70000001082362619';

    if (!isMobile) {
      window.open(webUrl, '_blank'); // Открываем веб-сайт в новой вкладке
      return;
    }

    const start = Date.now();
    window.open(dGisUrl, '_blank'); // Попытка открыть 2GIS в новой вкладке

    // Проверяем, было ли открыто приложение 2GIS
    setTimeout(() => {
      const elapsed = Date.now() - start;
      // Если прошло меньше 1600 мс, приложение не открылось
      if (elapsed < 1600) {
        // Пробуем Яндекс.Карты
        window.open(yandexMapsUrl, '_blank'); // Открываем Яндекс в новой вкладке

        setTimeout(() => {
          const elapsedYandex = Date.now() - start;
          // Если прошло меньше 3200 мс, Яндекс тоже не открылся
          if (elapsedYandex < 3200) {
            // Открываем веб-сайт 2GIS
            window.open(webUrl, '_blank'); // Открываем веб-сайт в новой вкладке
          }
        }, 1500);
      }
    }, 1500);
  };

  const openInstagram = () => {
    const instagramUrl = "instagram://user?username=groom_kris"; // Ссылка на профиль в приложении
    const webInstagramUrl = "https://www.instagram.com/groom_kris/"; // Ссылка на профиль в вебе
    if (!isMobile) {
      window.open(webInstagramUrl, '_blank'); // Открываем веб-страницу Instagram в новой вкладке
      return;
    }

    // Попытка открыть приложение Instagram
    window.open(instagramUrl, '_blank'); // Открываем Instagram в новой вкладке

    // Проверка, было ли открыто приложение
    setTimeout(() => {
      // Если приложение не открылось, открываем веб-страницу
      window.open(webInstagramUrl, '_blank'); // Открываем веб-страницу Instagram в новой вкладке
    }, 2000); // 2 секунды — время, чтобы проверить открытие приложения
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.links}>
          <button className={styles.action}><Link href={'https://link.tetradka.io/box/71486'}>Записаться</Link></button>
          <span className='font-bold text-[#00f] text-2xl'><Link href='/services'>Услуги</Link></span>
          <span className='font-bold text-[#00f] text-2xl'><Link href='/services'>Отзывы</Link></span>
        </div>
        <Link href={'/'} className={styles.logo}>
          <Image
            src="/fullLogo.webp"
            alt="Логотип студии"
            width={100}
            height={130}
            priority={false}
            loading="lazy"
          />
        </Link>
        <div className={styles.contacts}>
          <Link href={'tel:+79026927051'} onClick={numberHandle} className='cursor-pointer'>+7 (902) 692 70-51</Link>

          <span className={styles.contactLink} onClick={openInstagram}>
            inst: @groom_kris
          </span>

          <span onClick={openMaps} className={styles.contactLink}>
            Сургут, Писателей, 21
          </span>
        </div>
      </footer>
      <div className={`${styles.popup} ${popupActive ? styles.popupActive : styles.popupInactive}`}>
        <div className="text-[#00f] w-[30px] h-[30px]">{time}</div>
        <p>Номер скопирован</p>
      </div>
    </>
  );
}  
