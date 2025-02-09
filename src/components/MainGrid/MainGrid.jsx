import styles from './MainGrid.module.css';

import Card from '../Card/Card';

const MainGrid = ({ items, setItems }) => {
  const { main_grid, title, cards_grid } = styles;

  if (!items) {
    return <p>Loading...</p>;
  }

  return (
    <div className={main_grid}>
      <h1 className={title}>Desserts</h1>

      <div className={cards_grid}>
        {items.map((card) => (
          <Card key={card.name} cardData={card} items={items} setItems={setItems} />
        ))}
      </div>
    </div>
  );
};

export default MainGrid;
