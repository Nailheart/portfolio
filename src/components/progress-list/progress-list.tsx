'use client';

import { FC, ReactNode, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

import { cn } from '@/helpers/helpers';
import { ProgressItem } from './progress-item/progress-item';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
}

const ProgressList: FC<Props> = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['-50vh', '40vh']
  });
  const isArray = Array.isArray(children);

  return (
    <div className={cn(styles.progressList, className)}>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.track}
          style={{ scaleY: scrollYProgress }}
        />
        <ul ref={ref}>
          {isArray 
            ? children.map((child, index) => <ProgressItem key={index}>{child}</ProgressItem>)
            : <ProgressItem>{children}</ProgressItem>
          }
        </ul>
      </div>
    </div>
  );
};

export { ProgressList };