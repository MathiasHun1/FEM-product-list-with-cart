import styles from './MainGrid.module.css';

import Card from '../Card/Card';

const MainGrid = ({ data, itemsListing, setItemsListing }) => {
  const { main_grid, title, cards_grid } = styles;

  if (!data || !itemsListing) {
    return <p>Loading...</p>;
  }

  return (
    <div className={main_grid}>
      <h1 className={title}>Desserts</h1>

      <div className={cards_grid}>
        {data.map((card) => (
          <Card key={card.name} cardData={card} itemsListing={itemsListing} setItemsListing={setItemsListing} />
        ))}
      </div>
    </div>
  );
};

export default MainGrid;
