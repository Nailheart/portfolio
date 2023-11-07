import Link from 'next/link';

import { ContactForm } from '@/components/contact-form/contact-form';
import { Icon } from '@/components/icon/icon';
import { SocialLink } from '@/components/social-link/social-link';
import styles from './styles.module.scss';

const Contacts = () => {
  return (
    <section id="contacts" className={styles.contacts}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Contact <span>Me!</span>
        </h2>

        <div className={styles.info}>
          <div className={styles.infoItem}>
            <Icon className={styles.icon} name="mail" size={30} />
            <div>
              <h3 className={styles.infoTitle}>Mail</h3>
              <Link
                className={styles.link}
                href="mailto:nailheart4@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                nailheart4@gmail.com
              </Link>
            </div>
          </div>
          <div className={styles.infoItem}>
            <Icon className={styles.icon} name="location" size={30} />
            <div>
              <h3 className={styles.infoTitle}>Location</h3>
              <span>Ukraine, Dnipro region</span>
            </div>
          </div>
        </div>

        <div className={styles.social}>
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
          <SocialLink
            className={styles.socialLink}
            href="https://www.linkedin.com/in/yaroslav-lebedenko-9b1bb7233/"
            iconName="linkedIn"
            title="linkedIn"
          />
          <SocialLink
            className={styles.socialLink}
            href="https://t.me/Nailheart"
            iconName="telegram"
            title="telegram"
          />
          <SocialLink
            className={styles.socialLink}
            href="https://codepen.io/Nailheart"
            iconName="codepen"
            title="codepen"
          />
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export { Contacts };
