import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import ProjectsList from './ProjectsList';
import styles from './styles/projects.module.css';
function Projects() {
  const { colors } = useContext(ThemeContext);
  return (
    <div className={styles['container']}>
      <main className={styles['projects']}>
        <h1 className={styles['title']}>projects</h1>
        <h1 className={styles['text']} style={{ color: colors.header }}>
          recent work
        </h1>
        <ProjectsList />
      </main>
    </div>
  );
}
export default Projects;
