'use client'

import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import breedStore from '@/stores/BreedStore';
import { breeds } from '@/app/breedsPrices';
import styles from '@/styles/services/breedList.module.css'

export const BreedList: React.FC = observer(() => {
  const { breed } = breedStore;
  const [activeComplex, setActiveComplex] = useState<string | null>(null);
  
  if (!breed || !breeds[breed]) {
    return <span className='font-bold text-center w-full text-2xl text-gray-700 mt-[4vw]'>Выберите породу</span>;
  }

  const breedComplexes = breeds[breed];

  const toggleDescription = (complexName: string) => {
    setActiveComplex(activeComplex === complexName ? null : complexName);
  };

  return (
    <div className={styles.breedList}>
      {Object.entries(breedComplexes).map(([complexName, price]) => price !== null && (
        <div key={complexName} className={styles.block}>
          <div className={styles.header} onClick={() => toggleDescription(complexName)}>
            <span>{ complexName }</span>
            <span className='ml-[6%]'>{price}₽</span>
          </div>
          {activeComplex === complexName && (
            <div className={styles.description}>
              <p>Описание комплекса {complexName} для породы {breed}.</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
});
