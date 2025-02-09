import styles from './ResponsiveImage.module.css';
import helpers from '../../utils';

import ButtonAdd from '../Button-add/ButtonAdd';
import { useState } from 'react';

const ResponsiveImage = ({ cardData, items, setItems }) => {
  const { image_wrapper, picture, active } = styles;

  const [isActive, setIsactive] = useState(false);
  const images = helpers.fixPath(cardData.image);

  return (
    <div className={`${image_wrapper} ${isActive ? active : ''}`}>
      <picture>
        <source media="(min-width: 200px) and (max-width: 649px)" srcSet={images.mobile} />
        <source media="(min-width: 650px) and (max-width: 1099px)" srcSet={images.tablet} />
        <source media="(min-width: 1100px)" srcSet={images.desktop} />
        <img className={picture} src={images.thumbnail} alt="" />
      </picture>
      <ButtonAdd cardData={cardData} items={items} setItems={setItems} isActive={isActive} setIsActive={setIsactive} />
    </div>
  );
};

export default ResponsiveImage;
