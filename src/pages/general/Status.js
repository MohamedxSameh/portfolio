import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './styles/status.module.css';
function Status() {
  const [status, setStatus] = useState(true);
  const Active = 'available for work';
  const inActive = 'currently not available';
  const style = status ? 'green' : 'red';
  const { colors } = useContext(ThemeContext);
  return (
    <div className={styles['status']}>
      <div className={[styles['circle'], styles[`${style}`]].join(' ')}></div>
      <p className={styles['text']} style={{ color: colors.font }}>
        {status ? Active : inActive}
      </p>
    </div>
  );
}
export default Status;
