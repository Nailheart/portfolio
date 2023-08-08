'use client';

import { FC, ReactNode, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
}

const ProgressItem: FC<Props> = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [1.5, .5]
  });

  return (
    <motion.li
      ref={ref}
      className={styles.item}
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: .5, type: 'spring' }}
    >
      <svg className={styles.icon} width="30" height="30" viewBox="0 0 50 50">
        <circle
          cx="25"
          cy="25"
          r="22"
          strokeWidth={1}
        />
        <circle
          cx="25"
          cy="25"
          r="10"
        />
        <motion.circle
          cx="25"
          cy="25"
          r="22"
          strokeWidth={7}
          pathLength="1"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      {children}
    </motion.li>
  );
};

export { ProgressItem };