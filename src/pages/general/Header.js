import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './styles/header.module.css';
function Header() {
  const { darkTheme, colors } = useContext(ThemeContext);
  return (
    <nav className={styles['navbar']} style={{ backgroundColor: colors.bg }}>
      <ul className={styles['nav-list']}>
        <Link to="/">
          <li className={[styles['list-item'], styles['home']].join(' ')}>
            home
          </li>
        </Link>
        <Link to="/projects">
          <li className={[styles['list-item'], styles['projects']].join(' ')}>
            projects
          </li>
        </Link>
        <Link to="/about">
          <li className={[styles['list-item'], styles['about']].join(' ')}>
            about
          </li>
        </Link>
        <li className={[styles['list-item'], styles['contact']].join(' ')}>
          contact
        </li>
      </ul>
    </nav>
  );
}
export default Header;
