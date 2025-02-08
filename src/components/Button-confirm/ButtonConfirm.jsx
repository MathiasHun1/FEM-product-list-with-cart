import styles from './ButtonConfirm.module.css';

const ButtonConfirm = ({ text = '', setModalOpen, modalOpen }) => {
  const handleClick = () => {
    setModalOpen(!modalOpen);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      {text}
    </button>
  );
};

export default ButtonConfirm;
