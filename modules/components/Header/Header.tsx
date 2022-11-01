import Image from 'next/image';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles['container']}>
      <div className={styles['content']}>
        <Image src="/assets/logo.svg" alt="" width="108" height="45" />
      </div>
      <nav>
        <a href="">Home</a>
        <a href="">Posts</a>
      </nav>
    </header>
  );
}
