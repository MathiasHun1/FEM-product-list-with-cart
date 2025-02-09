import styles from './Card.module.css';

import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import CardTextSection from '../CardText/CardTextSection';

const Card = ({ cardData, items, setItems }) => {
  const { card_wrapper } = styles;

  return (
    <div className={card_wrapper}>
      <ResponsiveImage cardData={cardData} items={items} setItems={setItems} />
      <CardTextSection name={cardData.name} category={cardData.category} price={cardData.price} />
    </div>
  );
};

export default Card;
