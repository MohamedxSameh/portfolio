import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './styles/info.module.css';
function Info() {
  const { colors } = useContext(ThemeContext);
  return (
    <div style={{ color: colors.font }}>
      <p className={styles['para']}>
        My name is Mohamed Sameh, I’m 22 years old Software Engineer and
        Front-End Web Developer based in Egypt specialized in Designing and
        Creating websites.
      </p>
      <p className={[styles['para'], styles['para2']].join(' ')}>
        I’m very passionate about creating unique and special websites and i
        find my pleasure in designing UI / UX for the web.
      </p>
      <div className={styles['grad']}>
        <i className={`${styles.gradIcon} fas fa-graduation-cap`} />
        <span className={styles['text']}>
          Software enginering-ainshams university
        </span>
      </div>
      <div className={styles['location']}>
        <i className={`${styles['location-icon']} fas fa-map-marker-alt`} />
        <span className={styles['text']}>egypt-cairo</span>
      </div>
    </div>
  );
}
export default Info;
