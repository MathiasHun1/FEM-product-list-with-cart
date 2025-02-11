import { useContext } from 'react';
import { Context } from '../../contexts/ItemsContext';
import styles from './MainGrid.module.css';

import Card from '../Card/Card';

const MainGrid = () => {
  const { items } = useContext(Context);

  if (!items) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.main_grid}>
      <h1 className={styles.title}>Desserts</h1>

      <div className={styles.cards_grid}>
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MainGrid;
