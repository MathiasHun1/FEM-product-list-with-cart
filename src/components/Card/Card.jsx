import styles from './Card.module.css';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import ButtonAdd from '../Button-add/ButtonAdd';
import CardTextSection from '../CardText/CardTextSection';
import { useState } from 'react';

const Card = ({ item }) => {
  const [isActive, setActive] = useState(false);

  return (
    <div className={styles.card_wrapper}>
      <div className={styles.image_wrapper}>
        <ResponsiveImage isActive={isActive} imageSources={item.image} />
        <ButtonAdd item={item} isActive={isActive} setActive={setActive} />
      </div>
      <CardTextSection item={item} />
    </div>
  );
};

export default Card;
