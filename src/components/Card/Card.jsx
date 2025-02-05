import styles from './Card.module.css';

import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import CardTextSection from '../CardText/CardTextSection';

const Card = ({ cardData, itemsListing, setItemsListing }) => {
  const { card_wrapper } = styles;

  return (
    <div className={card_wrapper}>
      <ResponsiveImage cardData={cardData} itemsListing={itemsListing} setItemsListing={setItemsListing} />
      <CardTextSection name={cardData.name} category={cardData.category} price={cardData.price} />
    </div>
  );
};

export default Card;
