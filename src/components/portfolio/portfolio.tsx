import Link from 'next/link';

import { PortfolioCard } from '@/components/portfolio-card/portfolio-card';
import styles from './styles.module.scss';

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2 className={styles.title}><span>My</span> Works</h2>

      <ul className={styles.list}>
        <li>
          <PortfolioCard
            img="/img/works/youtube-clone.jpg"
            title="YouTube clone"
            description="Simplification youtube clone"
            liveUrl="https://youtube-clone-nailheart.vercel.app/"
            githubUrl="https://github.com/Nailheart/youtube-clone"
            topics="React - Typescript - Rapidapi Youtube v3"
          />
        </li>
        <li>
          <PortfolioCard
            img="/img/works/safari.jpg"
            title="Safari"
            description="Webstore clothing and accessories"
            liveUrl="https://nailheart.github.io/Safari/"
            githubUrl="https://github.com/Nailheart/Safari"
            topics="Sass - Jinja2 - JS"
          />
        </li>
        <li>
          <PortfolioCard
            img="/img/works/mogo.jpg"
            title="Mogo"
            description="Creative Template landing page"
            liveUrl="https://nailheart.github.io/Mogo/"
            githubUrl="https://github.com/Nailheart/Mogo"
            topics="Sass - Simplebar - Accordion"
          />
        </li>
      </ul>
      <Link className={styles.btn} href="/works">See more</Link>
    </section>
  );
};

export { Portfolio };