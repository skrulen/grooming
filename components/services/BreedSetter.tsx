'use client'

import styles from '@/styles/services/main.module.css'
import breedStore from '@/stores/BreedStore'
import { observer } from 'mobx-react-lite'
import { useEffect, useRef, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { RxCross1 } from "react-icons/rx";
import { breeds } from '@/app/breedsPrices'

export const BreedSetter: React.FC = observer(() => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredBreeds, setFilteredBreeds] = useState<string[]>(Object.keys(breeds))
  const { breed, setBreed } = breedStore

  const [isWindowShown, setWindowShown] = useState(false)

  const wrapper = useRef<HTMLDivElement | null>(null);
  const dialog = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedBreed = localStorage.getItem('breed');
      if (storedBreed) {
        setBreed(storedBreed);
      }
    }
  }, [setBreed]);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        wrapper.current &&
        dialog.current &&
        wrapper.current.contains(event.target as Node) &&
        !dialog.current.contains(event.target as Node)
      ) {
        setWindowShown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const filtered = Object.keys(breeds).filter(breedName =>
      breedName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBreeds(filtered);
  }, [searchTerm]);

  return (
    <>
      <div className={`${styles.selectBreedBtn} ${breed ? styles.breedSelected : styles.breedUnselected}`} onClick={() => {setWindowShown(true); setSearchTerm('')}}>
        <span className='flex items-center justify-center text-center'>
          {breed || 'Выберите породу'}
        </span>
      </div>
      <div ref={wrapper} className={`${styles.wrapper} ${isWindowShown ? styles.wrapperActive : styles.wrapperInactive}`}></div>
      <div ref={dialog} className={`${styles.dialogContainer} ${isWindowShown ? styles.pointerEventsAll : styles.pointerEventsNone}`}>
        <div className={`${styles.breedsDialog} ${isWindowShown ? styles.dialogActive : styles.dialogInactive}`}>
          <div className={`${styles.searchBox} ${styles.topSearchBox}`}>
            <IoIosSearch size={24} className={styles.searchIcon} />
            <input
              type="text"
              className={styles.searchBreed}
              placeholder='Введите название породы'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={()=>setWindowShown(false)} className={styles.cross}>
              <RxCross1 size={26} className='text-black'/>
            </button>
          </div>
          <div className={styles.breedList}>
            {filteredBreeds.map((breedName: string) => (
              <div
                key={breedName}
                className={styles.breedListElement}
                onClick={() => {
                  setBreed(breedName)
                  setWindowShown(false)
                }}
              >
                <span>{breedName}</span>
              </div>
            ))}
          </div>
          <div className={`${styles.searchBox} ${styles.bottomSearchBox}`}>
            <IoIosSearch size={24} className={styles.searchIcon} />
            <input
              type="text"
              className={styles.searchBreed}
              placeholder='Введите название породы'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={()=>setWindowShown(false)} className={styles.cross}>
              <RxCross1 size={26} className='text-black'/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
});
