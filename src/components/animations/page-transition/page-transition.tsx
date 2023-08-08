'use client';

import { FC, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './styles.module.scss';

const PageTransition = () => {
  const pathname = usePathname();
  const [key, setKey] = useState(pathname);

  const container = {
    initial: {
      x: '100%',
      width: '100%',
    },
    animate: {
      x: 0,
      width: 0,
    },
    exit: {
      x: '100%',
      width: '100%',
    }
  }

  useEffect(() => {
    setKey(pathname + Math.random());
  }, [pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <div key={key} className={styles.pageTransition}>
        <motion.div
          className={styles.pageTransitionItem}
          variants={container}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: .6, ease: 'easeInOut' }}
        />
        <motion.div
          className={styles.pageTransitionItem}
          variants={container}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2, duration: .6, ease: 'easeInOut' }}
        />
        <motion.div
          className={styles.pageTransitionItem}
          variants={container}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4, duration: .6, ease: 'easeInOut' }}
        />
        <motion.div
          className={styles.pageTransitionItem}
          variants={container}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.6, duration: .6, ease: 'easeInOut' }}
        />
      </div>
    </AnimatePresence>
  );
};

export { PageTransition };