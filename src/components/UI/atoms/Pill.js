import styles from 'styles/Atoms.module.scss';
import { FiChevronRight } from 'react-icons/fi';

function Pill(props) {
  const { text = 'Face Serum' } = props;
  return (
    <div className={styles['pill']}>
      <span>{text} </span>
      <FiChevronRight size={14} />
    </div>
  );
}

export default Pill;
