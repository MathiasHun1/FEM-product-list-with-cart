import styles from './ButtonConfirm.module.css';

const ButtonConfirm = ({ text = '', setModalOpen, modalOpen }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setModalOpen(!modalOpen);
    }, 200);
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      {text}
    </button>
  );
};

export default ButtonConfirm;
