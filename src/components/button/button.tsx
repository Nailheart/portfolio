import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { cn } from '@/helpers/helpers';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'neon';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({ className, variant, children, ...rest }) => {
  return (
    <button
      className={cn(
        styles.button,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary,
        variant === 'neon' && styles.neon,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };
