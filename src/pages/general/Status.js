import { useState } from 'react';
import styles from './styles/status.module.css';
function Status() {
  const [status, setStatus] = useState(true);
  const Active = 'available for work';
  const inActive = 'currently not available';
  const style = status ? 'green' : 'red';
  return (
    <div className={styles['status']}>
      <div className={[styles['circle'], styles[`${style}`]].join(' ')}></div>
      <p className={styles['text']}>{status ? Active : inActive}</p>
    </div>
  );
}
export default Status;
