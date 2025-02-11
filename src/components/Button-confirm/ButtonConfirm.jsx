import { useContext } from 'react';
import styles from './ButtonConfirm.module.css';
import { Context } from '../../contexts/ItemsContext';

const ButtonConfirm = ({ text = '' }) => {
  const { modalOpen, setModalOpen } = useContext(Context);

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
