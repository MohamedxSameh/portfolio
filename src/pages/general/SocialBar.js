import styles from './styles/socialBar.module.css';
function SocialBar() {
  return (
    <aside className={styles['social-bar']}>
      <ul className={styles['social-list']}>
        <li className={[styles['social-icon'], styles['fb']].join(' ')}>
          <i className="fab fa-facebook-f fa-2x" />
        </li>
        <li className={[styles['social-icon'], styles['ig']].join(' ')}>
          <i className="fab fa-instagram fa-2x" />
        </li>
        <li className={[styles['social-icon'], styles['tw']].join(' ')}>
          <i className="fab fa-twitter fa-2x" />
        </li>
        <li className={[styles['social-icon'], styles['gh']].join(' ')}>
          <i className="fab fa-github fa-2x" />
        </li>
      </ul>
    </aside>
  );
}
export default SocialBar;
