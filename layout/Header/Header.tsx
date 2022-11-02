import Image from 'next/image';
import styles from './hs.module.scss';
import { SignInButton } from '../../modules/components/SignInButton';

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Image src="/assets/logo.svg" alt="" width="108" height="45" />
        <nav className={styles.nav}>
          <a
            className={`${styles['nav-link']} ${styles['link-active']}`}
            href="#"
          >
            Home
          </a>
          <a className={`${styles['nav-link']}`} href="#">
            Posts
          </a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
