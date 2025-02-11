import styles from './ResponsiveImage.module.css';

const ResponsiveImage = ({ imageSources, isActive }) => {
  const { image_wrapper, picture, active } = styles;

  return (
    <div className={`${image_wrapper} ${isActive ? active : ''}`}>
      <picture>
        <source media="(min-width: 200px) and (max-width: 649px)" srcSet={imageSources.mobile} />
        <source media="(min-width: 650px) and (max-width: 1099px)" srcSet={imageSources.tablet} />
        <source media="(min-width: 1100px)" srcSet={imageSources.desktop} />
        <img className={picture} src={imageSources.thumbnail} alt="" />
      </picture>
    </div>
  );
};

export default ResponsiveImage;
