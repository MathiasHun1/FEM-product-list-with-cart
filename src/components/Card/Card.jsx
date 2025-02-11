import styles from './Card.module.css';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import ButtonAdd from '../Button-add/ButtonAdd';
import CardTextSection from '../CardText/CardTextSection';
import { useState } from 'react';

const Card = ({ cardData }) => {
  const { card_wrapper, image_wrapper } = styles;
  const [isActive, setActive] = useState(false);

  return (
    <div className={card_wrapper}>
      <div className={image_wrapper}>
        <ResponsiveImage isActive={isActive} imageSources={cardData.image} />
        <ButtonAdd cardData={cardData} isActive={isActive} setActive={setActive} />
      </div>
      <CardTextSection cardData={cardData} />
    </div>
  );
};

export default Card;
