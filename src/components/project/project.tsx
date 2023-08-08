import { FC, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/helpers/helpers';
import styles from './styles.module.scss';

type Props = {
  img: string;
  title: string;
  topics: string;
  homepage: string;
  description: string;
  social?: ReactNode;
  className?: string;
}

const Project: FC<Props> = ({
  img,
  title,
  topics,
  homepage,
  description,
  social,
  className,
}) => {
  return (
    <article className={cn(className)}>
      <Link
        className={styles.linkImage}
        href={homepage}
        target="_blank"
      >
        <Image 
          className={styles.img}
          src={img}
          width={600}
          height={600}
          alt={'Preview ' + title}
        />
      </Link>
      <div className={styles.content}>
        <div className={styles.contentTop}>
          <h3 className={styles.title}>
            <Link
              className={styles.titleLink}
              href={homepage}
              target="_blank"
            >
              {title}
            </Link>
          </h3>
          
          <div className={styles.social}>{social}</div>
        </div>
        
        <p className={styles.description}>{description}</p>
        <span className={styles.topics}>{topics}</span>
      </div>
    </article>
  );
};

export { Project };