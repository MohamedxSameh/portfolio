import ProjectsList from './ProjectsList';
import styles from './styles/projects.module.css';
function Projects() {
  return (
    <main className={styles['projects']}>
      <h1 className={styles['title']}>recent work</h1>
      <ProjectsList />
      <h1 className={styles['footer']}>projects</h1>
    </main>
  );
}
export default Projects;
