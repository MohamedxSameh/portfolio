import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Info from './Info';
import styles from './styles/about.module.css';
function About() {
  const { colors } = useContext(ThemeContext);
  return (
    <main className={styles['about']}>
      <h1 className={styles['title']}>About</h1>
      <h1 className={styles['text']} style={{ color: colors.header }}>
        who am i
      </h1>
      <Info />
    </main>
  );
}
export default About;
