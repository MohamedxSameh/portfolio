import ProjectItem from './ProjectItem';
import styles from './styles/list.module.css';
function ProjectsList() {
  return (
    <div className={styles['projects']}>
      <ul className={styles['project-list']}>
        <li className={styles['project']}>
          <ProjectItem />
        </li>
        <li className={styles['project']}>
          <ProjectItem />
        </li>
        <li className={styles['project']}>
          <ProjectItem />
        </li>
        <li className={styles['project']}>
          <ProjectItem />
        </li>
        <li className={styles['project']}>
          <ProjectItem />
        </li>
      </ul>
    </div>
  );
}
export default ProjectsList;
