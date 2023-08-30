import Link from 'next/link';

import { Icon } from '@/components/icon/icon';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          <span>
            © {new Date().getFullYear().toString()}&nbsp;
            Made with <span className={styles.heart}>&#10084;</span> by&nbsp;
          </span>
          <Link className={styles.name} href="/">
            Yaroslav&nbsp;Lebedenko
            <Icon
              className={styles.icon}
              name="rocket"
              aria-label="rocket icon"
            />
          </Link>
        </p>
      </div>
    </footer>
  );
};

export { Footer };