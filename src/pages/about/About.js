import Info from './Info';
import styles from './styles/about.module.css';
function About() {
  return (
    <main className={styles['about']}>
      <h1 className={styles['title']}>who am i</h1>
      <Info />
      <h1 className={styles['footer']}>About</h1>
    </main>
  );
}
export default About;
