'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/helpers/helpers';
import styles from './styles.module.scss';

type Props = {
  text: string;
  className?: string;
}

const SplitText: FC<Props> = ({ text, className }) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <motion.p
      className={cn(styles.text, className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {
        text.split(" ").map((word, index) => (
          <motion.span key={word + index} variants={item}>
            {word}&nbsp;
          </motion.span>
        ))
      }
    </motion.p>
  );
};

export { SplitText };