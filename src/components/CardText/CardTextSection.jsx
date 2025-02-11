import styles from './CardTextSection.module.css';

const CardTextSection = ({ item }) => {
  const { category, name, price } = item;

  return (
    <div className={styles.text_wrapper}>
      <h2 className={styles.card_category}>{category}</h2>
      <p className={styles.card_name}>{name}</p>
      <p className={styles.card_price}>${price.toFixed(2)}</p>
    </div>
  );
};

export default CardTextSection;
