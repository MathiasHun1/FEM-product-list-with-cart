import { useContext } from 'react';
import { Context } from '../../contexts/ItemsContext';
import styles from './MainGrid.module.css';

import Card from '../Card/Card';

const MainGrid = () => {
  const { main_grid, title, cards_grid } = styles;
  const { items } = useContext(Context);

  if (!items) {
    return <p>Loading...</p>;
  }

  return (
    <div className={main_grid}>
      <h1 className={title}>Desserts</h1>

      <div className={cards_grid}>
        {items.map((card) => (
          <Card key={card.id} cardData={card} />
        ))}
      </div>
    </div>
  );
};

export default MainGrid;
