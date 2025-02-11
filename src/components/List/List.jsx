import styles from './List.module.css';
import { motion } from 'motion/react';

const List = ({ children }) => {
  return <motion.ul className={styles.list}>{children}</motion.ul>;
};

export default List;
