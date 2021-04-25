import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Status from '../general/Status';
import Hello from './Hello';
import styles from './styles/home.module.css';
function Home() {
  const { colors } = useContext(ThemeContext);
  return (
    <div className={styles['container']}>
      <div className={styles['home']}>
        <Hello />
        <main className={styles['main']}>
          <span className={styles['name']} style={{ color: colors.header }}>
            i'm mohamed sameh
          </span>
          <p className={styles['para']} style={{ color: colors.font }}>
            a front end web developer <br /> & <br /> desginer
          </p>
          <Status />
        </main>
      </div>
    </div>
  );
}
export default Home;
