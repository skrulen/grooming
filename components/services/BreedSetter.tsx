'use client'

import styles from '@/styles/services/main.module.css';
import breedStore from '@/stores/BreedState';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import breeds from '@/app/breedsPrices';

export const BreedSetter: React.FC = observer(() => {
  const [searchTerm, setSearchTerm] = useState(''); // Состояние для поискового запроса
  const [filteredBreeds, setFilteredBreeds] = useState<string[]>(Object.keys(breeds)); // Фильтрованный список пород
  const { breed, setBreed } = breedStore;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedBreed = localStorage.getItem('breed');
      if (storedBreed) {
        setBreed(storedBreed);
      }
    }
  }, [setBreed]);

  useEffect(() => {
    const filtered = Object.keys(breeds).filter(breedName =>
      breedName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBreeds(filtered);
  }, [searchTerm]);

  return (
    <>
      <div onClick={() => setBreed('Пекинес')}>
        <span className='flex items-center justify-center'>
          {breed || 'Выберите породу'}
        </span>
      </div>
      <div className={styles.wrapper}></div>
      <div className={styles.breedsDialog}>
        <div className={styles.searchBox}>
          <IoIosSearch size={30} className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchBreed}
            placeholder='Введите название породы'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className={styles.breedList}>
          {filteredBreeds.map((breedName) => (
            <div
              key={breedName}
              className={styles.breedListElement}
              onClick={() => setBreed(breedName)}
            >
              <span>{breedName}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});
