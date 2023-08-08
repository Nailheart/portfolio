'use client';

import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/helpers/helpers';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
  lineColor?: string;
  loop?: boolean;
  once?: boolean;
  speed?: number;
}

const Underline: FC<Props> = ({
  children,
  className,
  lineColor,
  loop,
  once,
  speed,
}) => {
  return (
    <span className={cn(styles.underlineText, className)}>
      <svg 
        className={styles.underlineLine}
        fill="none"
        stroke={lineColor ?? 'currentColor'}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
      >
        <motion.path
          fill="none"
          d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
          initial={{ strokeDasharray: '0 1500' }}
          whileInView={{ strokeDasharray: '1500 1500' }}
          transition={{
            duration: speed ?? 1.5,
            repeat: loop ? Infinity : 0,
          }}
          viewport={{ once: once }}
        >
        </motion.path>
      </svg>
      {children}
    </span>
  );
};

export { Underline };