import styles from './CardTextSection.module.css';

const CardTextSection = ({ cardData }) => {
  const { text_wrapper, card_category, card_name, card_price } = styles;
  const { category, name, price } = cardData;

  return (
    <div className={text_wrapper}>
      <h2 className={card_category}>{category}</h2>
      <p className={card_name}>{name}</p>
      <p className={card_price}>${price.toFixed(2)}</p>
    </div>
  );
};

export default CardTextSection;
