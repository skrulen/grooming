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
    return <div>Выберите породу</div>;
  }

  const breedComplexes = breeds[breed];

  const toggleDescription = (complexName: string) => {
    setActiveComplex(activeComplex === complexName ? null : complexName);
  };

  return (
    <div>
      {Object.entries(breedComplexes).map(([complexName, price]) => (
        <div key={complexName} className={styles.block}>
          <div className={styles.header} onClick={() => toggleDescription(complexName)}>
            <span>{ complexName }</span>
            <span>{ price !== null ? `${price}₽` : "Недоступно" }</span>
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
