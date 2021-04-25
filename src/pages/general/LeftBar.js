import Chat from './Chat';
import SocialBar from './SocialBar';
import styles from './styles/leftBar.module.css';

function LeftBar() {
  return (
    <div className={styles['left-bar']}>
      <SocialBar />
      <Chat />
    </div>
  );
}
export default LeftBar;
