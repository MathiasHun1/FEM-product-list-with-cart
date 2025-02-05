import styles from './ResponsiveImage.module.css';
import helpers from '../../utils';

import ButtonAdd from '../Button-add/ButtonAdd';

const ResponsiveImage = ({ cardData, itemsListing, setItemsListing }) => {
  const { image_wrapper, picture } = styles;
  const images = helpers.fixPath(cardData.image);

  return (
    <div className={image_wrapper}>
      <picture>
        <source media="(min-width: 200px) and (max-width: 649px)" srcSet={images.mobile} />
        <source media="(min-width: 650px) and (max-width: 1099px)" srcSet={images.tablet} />
        <source media="(min-width: 1100px)" srcSet={images.desktop} />
        <img className={picture} src={images.thumbnail} alt="" />
      </picture>
      <ButtonAdd cardData={cardData} itemsListing={itemsListing} setItemsListing={setItemsListing} />
    </div>
  );
};

export default ResponsiveImage;
