import styles from './ButtonConfirm.module.css';

const ButtonConfirm = ({ text = '', setModalOpen, modalOpen }) => {
  return (
    <button className={styles.button} onClick={() => setModalOpen(!modalOpen)}>
      {text}
    </button>
  );
};

export default ButtonConfirm;
