import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';
import { SocialLink } from '@/components/social-link/social-link';

type Props = {
  img: string;
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  topics?: string;
}

const PortfolioCard: FC<Props> = ({
  img,
  title,
  description,
  liveUrl,
  githubUrl,
  topics,
}) => {
  return (
    <div className={styles.portfolioCard}>
      <Image 
        className={styles.img}
        width={650}
        height={800}
        src={img}
        alt={title + 'main page'}
      />
      <div className={styles.content}>
        <div className={styles.contentTop}>
          <h3 className={styles.title}>
            <Link
              className={styles.link}
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </Link>
          </h3>
          <SocialLink
            title="github"
            href={githubUrl}
            iconName="github"
          />
        </div>
        <p className={styles.description}>{description}</p>
        <p className={styles.topics}>{topics}</p>
      </div>
    </div>
  );
};

export { PortfolioCard };