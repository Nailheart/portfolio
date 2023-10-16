import Link from 'next/link';

import { Card } from '@/components/card/card';
import styles from './styles.module.scss';

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2 className={styles.title}><span>My</span> Works</h2>

      <ul className={styles.list}>
        <li>
          <Card
            img="/img/works/youtube-clone.jpg"
            title="YouTube"
            description="Youtube clone using rapid api - demo."
            href="https://youtube-clone-nailheart.vercel.app/"
            githubUrl="https://github.com/Nailheart/youtube-clone"
            topics={['react', 'typescript', 'rapid-api', 'sass']}
          />
        </li>
        <li>
          <Card
            img="/img/works/safari.jpg"
            title="Safari"
            description="Static multi page store."
            href="https://nailheart.github.io/Safari/"
            githubUrl="https://github.com/Nailheart/Safari"
            topics={['jinja', 'gulp', 'sass']}
          />
        </li>
        <li>
          <Card
            img="/img/works/mogo.jpg"
            title="Mogo"
            description="Creative landing page template."
            href="https://nailheart.github.io/Mogo/"
            githubUrl="https://github.com/Nailheart/Mogo"
            topics={['simple-bar', 'sass', 'gulp', 'google-maps',]}
          />
        </li>
      </ul>
      <Link className={styles.btn} href="/works">See more</Link>
    </section>
  );
};

export { Portfolio };