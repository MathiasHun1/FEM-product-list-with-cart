import { useContext } from 'react';
import ItemsContext from '../../contexts/ItemsContext';
import styles from './MainGrid.module.css';

import Card from '../Card/Card';

const MainGrid = () => {
  const { main_grid, title, cards_grid, image_wrapper } = styles;
  const { items } = useContext(ItemsContext);

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
