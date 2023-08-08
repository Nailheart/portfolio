import { SocialLink } from '@/components/social-link/social-link';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contacts:</h2>

        <div className={styles.social}>
          <SocialLink
            className={styles.socialLink}
            href="mailto:nailheart4@gmail.com"
            iconName="email"
            title="email"
          />
          <SocialLink
            className={styles.socialLink}
            href="linkedin.com/in/yaroslav-lebedenko-9b1bb7233"
            iconName="linkedin"
            title="linkedin"
          />
          <SocialLink
            className={styles.socialLink}
            href="https://github.com/Nailheart"
            iconName="github"
            title="github"
          />
          <SocialLink
            className={styles.socialLink}
            href="https://join.skype.com/invite/D5WcE8DUXPR9"
            iconName="skype"
            title="skype"
          />
        </div>
      </div>
    </footer>
  );
};

export { Footer };